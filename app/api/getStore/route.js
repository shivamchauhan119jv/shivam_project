// Import the NextResponse class from the 'next/server' module
import { NextResponse } from 'next/server';

// Import the GeoJSON data and Turf.js library for geospatial operations
import geojson from './asset.geojson';
import * as turf from '@turf/turf';

// Function to fetch geolocation data using a third-party API
async function fetchGeolocationData(address) {
    // Define the API endpoint URL for geolocation data
    const url = `https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=${address}`;
    
    // Set up the options for the API request, including headers
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b4f68bc2c2mshe608a930ef4fc28p185c1djsn645ce3f43579',
            'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com',
        },    };

    try {
        // Fetch geolocation data from the API and parse the JSON response
        const response = await fetch(url, options);
        const result = await response.json();        return result.Results[0];
    } catch (error) {
        // Handle errors in case of a failed API request
        console.error(error);
        throw new Error('Failed to fetch geolocation data');    }
}

// Function to check if a given latitude and longitude are inside a GeoJSON feature
const checkCoordinates = (latitude, longitude) => {
    // Iterate through each feature in the GeoJSON data
    for (const feature of geojson.features) {
        // Check if the point is inside the current feature
        if (pointIsInsideFeature(latitude, longitude, feature)) {            return feature.properties.Name;
        }
    }
    // Return a default message if no matching store is found
    return 'No Store Found';
};

// Function to determine if a point is inside a GeoJSON feature (polygon or point)
const pointIsInsideFeature = (latitude, longitude, feature) => {
    // Create a Turf.js point object representing the provided coordinates
    const point = turf.point([longitude, latitude]);

    // Check the feature geometry type and perform the corresponding check
    if (feature.geometry.type === 'Polygon') {
        // For polygons, create a Turf.js polygon object and check point inclusion
        const polygon = turf.polygon([feature.geometry.coordinates[0]]);
        return turf.booleanPointInPolygon(point, polygon);
    } else if (feature.geometry.type === 'Point') {
        // For points, create a Turf.js point object and check equality
        const featurePoint = turf.point(feature.geometry.coordinates);
        return turf.booleanEqual(point, featurePoint);
    }

    return false;
};

const handleCheckCoordinates = async (address) => {
    try {
        // Fetch geolocation data using the provided address
        const geolocationData = await fetchGeolocationData(address);

        // Extract latitude and longitude from the geolocation data
        const { longitude, latitude } = geolocationData;

        // Check for the nearest store based on the coordinates
        const store = checkCoordinates(latitude, longitude);

        // Construct the response message with the store information
        const responseMessage = `${store}`;

        // Return a NextResponse object with the JSON response
        return new NextResponse(JSON.stringify({ message: responseMessage }));
    } catch (error) {
        // Handle errors and return a NextResponse with an error message and status code
        console.error(error);
        return new NextResponse({ error: 'Error processing request' }, { status: 500 });
    }
};

// Define the GET request handler for the endpoint
export async function GET(request) {
    try {
        // Extract the 'address' parameter from the query string
        const searchParams = request.nextUrl.searchParams;
        const address = searchParams.get('address');

        // Check if the 'address' parameter is missing
        if (!address) {
            throw new NextResponse({ error: 'Address parameter is missing' });
        }

        // Handle the overall process of checking coordinates and get the response
        const response = await handleCheckCoordinates(address);

        // Return the response to the client
        return response;
    } catch (error) {
        // Handle errors and return a NextResponse with an error message and status code
        console.error(error);
        return new NextResponse({ error: 'Error processing request' }, { status: 500 });
    }
}

'use client'


// Import necessary modules from React 
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

// Define a functional component named CoordinatesChecker
const CoordinatesChecker = () => {
  // State variables to manage user input, API response, and loading state
  const [address, setAddress] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch coordinates based on the provided address
  const getStore = async (e) => {
    e.preventDefault()
    // Set loading state to true before making the API call
    setLoading(true);

    try {
      // Use fetch to call the API and handle the response
      const data = await fetch(`/api/getStore?address=${address}`);
      const jsonData = await data.json();
      setResponse(jsonData.message);
      Swal.fire('Nearest Outlet : ' + jsonData.message);
    } catch (err) {
      // Log and handle errors if any
      console.log('error' + err);
      setResponse('Something Went Wrong, Try To Refresh');
    } finally {
      // Set loading state to false after the API call is complete
      setLoading(false);
    }
  };

  // JSX structure for the component
  return (
    <div className="px-4 py-16 mx-auto h-screen sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl ">
        <div className="text-center">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400 bg-indigo-950 text-white ">
                <i className="underline underline-offset-4"> FoodDoneRight </i>
              </div>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill='white'
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="b039bae0-fdd5-4311-b198-8557b064fce0"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative ">🚀 Welcome </span>
              </span>{' '}
              {/* <span onClick={signOut}>Logout</span> */}
              to the Ultimate Outlet Identifier To Get Your Favourite Food
            </h2>
            <p className="text-base text-white md:text-lg">
              Are you tired of spending valuable time finding the nearest outlet? Look no further! Our  Nearest Outlet Identifier is here to revolutionize the way you find the outlet effortlessly.
            </p>
          </div>
          <form onSubmit={getStore} className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">

            <input
              autoFocus
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Enter Your Address"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center  h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-indigo-950 active:scale-90 w-fit"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
          <p className="max-w-md mx-auto mb-10 text-xs text-white sm:text-sm md:mb-16">
            Don't miss out on this game-changing tool – try it now and take your food experience to a different level ! 📈
          </p>
          <div
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110 bg-white"
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
              })
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the CoordinatesChecker component as the default export
export default CoordinatesChecker;

// next.config.js

module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.geojson$/,
        loader: 'json-loader', // Use 'json-loader' for GeoJSON files
        type: 'javascript/auto',
      });
  
      return config;
    },
  };
  
// Setting up geocoder
const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'mapquest',

    httpAdapter:'https',
    apiKey:'',  // API KEY here
    formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;

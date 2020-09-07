// Setting up geocoder
const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'mapquest',

    httpAdapter:'https',
    apiKey: '72AW7ukYO1RaDnnDAnr9vmQr8AMKxWaf',
    formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;

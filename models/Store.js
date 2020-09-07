const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const StoreSchema = new mongoose.Schema({
    storeId: {
        type:String,
        required: [true, 'Add a store Id'],     // msg can be returned if store id is not given
        unique: true,
        trim:true,
        maxLength:[10, 'Id must be less than 10']
    },
    address: {
      type:String,
      required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'], // in string only geoJson 'Point' is allowed
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'  //supports queries that cal geometries on an Earth like sphere
        },
        formattedAddress:String
    }
}, {timeStamp: true});

// Creating a mongoose middleware for creating location from address
StoreSchema.pre('save', async function (next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type:'Point',
        coordinates: [loc[0].latitude,loc[0].longitude],
        formattedAddress:loc[0].formattedAddress
    }

    this.address = undefined;   // address will not be saved in database
    next()
});  // this runs before saving data on db

module.exports = mongoose.model('Store', StoreSchema);

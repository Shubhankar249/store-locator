const mongoose = require('mongoose');
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
    },
    timeStamp:true
});

module.exports = mongoose.model('Store', StoreSchema);

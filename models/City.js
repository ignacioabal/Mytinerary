const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let CitySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    }
});

module.exports = City = mongoose.model('city', CitySchema);
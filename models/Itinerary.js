const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ItinerarySchema = new Schema({
  //city where Itinerary takes place
  city_id: {
    type: mongoose.Schema.types.ObjectId,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  //user who made de Itinerary
  user: {
    type: String,
    require: true
  },
  profPic: {
    type: String,
    require: true
  },
  //name of itinerary
  name: {
    type: String,
    require: true
  },
  //tags of the itinerary
  tags: {
    type: [String],
    require: false
  },
  likes: {
    type: Number,
    require: true
  },
  //   activities: {
  //     type: [String],
  //     require: true
  //   },
  duration: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  price: {
    type: Number,
    require: true
  }
});

module.exports = Itinerary = mongoose.model("city", ItinerarySchema);

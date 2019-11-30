const express = require("express");
const router = express.Router();

//City Model
const City = require("../../models/City");
const Itinerary = require("../../models/Itinerary");

// GET /all
// Get all cities

router.get("/", (req, res) => {
  City.find()
    .then(cities => res.json(cities))
    .catch(error => console.log(error));
});

router.get("/:name", (req, res) => {
  let cityRequested = req.params.name;
  let cityId;
  //capitalize the first letter of the requested city
  cityRequested =
    cityRequested.charAt(0).toUpperCase() + cityRequested.slice(1);

  City.findOne({ name: cityRequested }).then(city =>
    Itinerary.find({ city_id: city._id })
      .then(itin => res.send(itin))
      .catch(err => console.log(err))
  );
});

module.exports = router;

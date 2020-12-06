const express = require('express');
const router = express.Router();

//City Model
const Itinerary = require('../../models/Itinerary');


// GET /all
// Get all cities

router.get('/:city', (req, res) => {
    let {city} = req.params
    Itinerary.find({city: city})
        .then(itins => res.json(itins))
        .catch(error => console.log(error))
})
/*
router.get('/:name',(req, res) => {
            let cityRequested = req.params.name;

            //capitalize the first letter of the requested city
            cityRequested = cityRequested.charAt(0).toUpperCase() + cityRequested.slice(1);

            
            City.findOne({ name: cityRequested.substring(0)  })
                .then(city => res.send(city)    )
                .catch(err => console.log(err) );
    });

*/


module.exports = router;
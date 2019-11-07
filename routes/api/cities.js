const express = require('express');
const router = express.Router();

//City Model
const City = require('../../models/City');


// GET /all
// Get all cities

router.get('/', (req, res) => {
    City.find()
        .then(cities => res.json(cities));

})


module.exports = router;
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const uri = "mongodb+srv://hsdle:42440959@mytinerarydb-bdqz3.gcp.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(uri, (err, database) => {

    if (err) return console.log(err);

    app.listen(5000, () => {
        console.log('app working');

    });
})



// var router = express.Router();

// router.get('/', function (req, res) {
//     res.send('hello world');
// })

// app.use('/', router);

// app.get('/sample', function (req, res) {
//     res.send('this is a sample');
// })

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');

const cities = require('./routes/api/cities');
const db = require('./config/keys').URI;

//Middleware
app.use(bodyParser.json());
app.use(cors());


//DB  Connect
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Conectado a base de datos...'))
    .catch((err) => console.log(err));


//Routes
app.use('/cities/all', cities);



app.listen(port, () => console.log(`Puerto: ${port}`));




// var router = express.Router();

// router.get('/', function (req, res) {
//     res.send('hello world');
// })

// app.use('/', router);

// app.get('/sample', function (req, res) {
//     res.send('this is a sample');
// })

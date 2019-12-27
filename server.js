const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const config = require("config");
const passport = require("passport");
//const bodyParser = require("body-parser");

const cors = require("cors");

const cities = require("./routes/api/cities");
const users = require("./routes/api/users");
const db = config.get("mongoURI");

//Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
require("./auth/passport");

//DB  Connect
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Conectado a base de datos."))
  .catch(err => console.log(err));

//Routes
app.use("/", cities);
app.use("/", users);

app.listen(port, () => console.log(`Puerto: ${port}`));

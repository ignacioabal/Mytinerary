const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");

const cors = require("cors");

const cities = require("./routes/api/cities");
const users = require("./routes/api/users");
const db = require("./config/keys").URI;

//Middleware
app.use(express.json());
app.use(cors());

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
app.use("/cities", cities);
app.use("/", users);

app.listen(port, () => console.log(`Puerto: ${port}`));

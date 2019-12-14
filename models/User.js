const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  firstname: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  profPic: {
    type: String,
    require: true
  }
});

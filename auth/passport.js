const passport = require('passport');
const JwtStrat = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("user");
const config = require("config");

const opts = {};

//console.log(config.get('jwtSecret'));


opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get("jwtSecret");

module.exports = passport.use(
  new JwtStrat(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);

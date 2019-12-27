const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");

//User model
const User = require("../../models/User");
const validationArray = [
  check("email").notEmpty(),
  check('email').isEmail(),
  check("username").notEmpty(),
  check("firstname").notEmpty(),
  check("lastname").notEmpty(),
  check("password").notEmpty()
];

router.post("/register", validationArray, (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists." });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
        // profPic: req.body.userpic
      });
      console.log(newUser);

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user =>
              jwt.sign(
                { id: user.id },
                config.get("jwtSecret"),
                (err, token) => {
                  if (err) throw err;
                  res.json({
                    token
                  });
                }
              )
            )
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  /*
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }*/

  User.findOne({ email: req.body.email }).then(user => {
    if (!user) return res.status(400).json({ email: "User does not exist." });

    bcrypt.compare(req.body.password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "invalid credentials" });

      jwt.sign({ id: user.id }, config.get("jwtSecret"), (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            firstname: user.firstname,
            lastname: user.lastname
          }
        });
      });
    });
  })
    .catch(err => console.log(err));
});

module.exports = router;

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");

//User model
const User = require("../../models/User");
let validationArray = [
  check("email").isEmail(),
  check("username").exists(),
  check("firstname").exists(),
  check("lastname").exists(),
  check("password").exists(),
  check("email").exists()
];

router.post("/register", validationArray, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.findOne({ email: req.body.email }).then(us => {
    if (us) {
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
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

/*
router.get("/login",(req,res) =>{

})
*/
module.exports = router;

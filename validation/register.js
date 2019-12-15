const validator = require("validator");

module.exports = function validateRegister(data) {
  let errors = {};

  if (validator.isEmpty(data.firstname)) {
    errors.firstName = "First name field is required";
  }

  if (validator.isEmpty(data.lastname)) {
    errors.lastName = "Last name field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "password field is required";
  }
};

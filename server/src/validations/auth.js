const { body } = require("express-validator");

const validateUserRegistration = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 31 })
    .withMessage("Name should be at least 3-31 character long"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters long")
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/)
    .withMessage("Password must contain at least one letter and one number"),
  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required")
    .isLength({ min: 3 })
    .withMessage("Address should be at least 3 characters long"),
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone is required")
    .isLength({ min: 5 })
    .withMessage("Phoine should be at least 5 characters long"),
  // body("image")
  //   .trim()
  //   .optional()
  //   .isString()
  //   .withMessage("Image string is required"),
];

module.exports = { validateUserRegistration };

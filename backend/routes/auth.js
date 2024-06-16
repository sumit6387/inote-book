const express = require("express");
const { register, login } = require("../controllers/authController");
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/register",
  [
    body("email").trim().isEmail(),
    body("name").trim().notEmpty(),
    body("password").trim().notEmpty(),
  ],
  register
);

router.post(
  "/login",
  [body("email").trim().isEmail(), body("password").trim().notEmpty()],
  login
);

module.exports = router;

const User = require("../schema/User");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
const SECRET = "CodingIsLove";

const register = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({
        status: false,
        msg: "Validation failed!!",
        error: result,
      });
    }
    let payload = req.body;
    let user = await User.findOne({ email: payload.email });
    if (user) {
      return res.send({
        status: false,
        msg: "User with this email already exists!!",
      });
    }
    const hash = await bcrypt.hash(payload.password, 10);
    payload["password"] = hash;
    let newUser = new User(payload);
    user = newUser.save();
    return res.send({
      status: true,
      msg: "User registered successfully!!",
    });
  } catch (err) {
    return res.send({ status: false, msg: "Something went wrong!!" });
  }
};

const login = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({
        status: false,
        msg: "Validation failed!!",
        error: result,
      });
    }
    let payload = req.body;
    let user = await User.findOne({ email: payload.email }).lean();
    if (!user) {
      return res.send({
        status: false,
        msg: "Please enter valid credentials!!",
      });
    }
    const matched = await bcrypt.compare(payload.password, user.password);
    if (!matched) {
      return res.send({
        status: false,
        msg: "Please enter valid credentials!!",
      });
    }
    var token = jwt.sign(user, SECRET);

    return res.send({
      status: true,
      msg: "User logged in successfully!!",
      token: token,
    });
  } catch (err) {
    console.log(err);
    return res.send({ status: false, msg: "Something went wrong!!" });
  }
};

module.exports = {
  register,
  login,
};

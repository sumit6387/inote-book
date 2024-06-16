var jwt = require("jsonwebtoken");
const SECRET = "CodingIsLove";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("authorization");
    console.log(token);
    if (!token) {
      return res.status(401).send({ status: false, msg: "Invalid token" });
    }
    var decoded = jwt.verify(token, SECRET);
    console.log(decoded);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).send({ status: false, msg: "Invalid token" });
  }
};

module.exports = verifyToken;

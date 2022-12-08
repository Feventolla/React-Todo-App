const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const protect = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res.status(401);
      throw new Error("Not authorized to access this route");
    }
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      // req.user = await User.findById(decoded);
      req.user = decoded;

      next();
    } catch (err) {
      res.status(401).json({ msg: "Not authorized to access this route" });
    }
  } catch (error) {
    res.json(error);
  }
};

module.exports = { protect };

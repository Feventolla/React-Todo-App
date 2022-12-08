require("dotenv").config();
const express = require("express");
// const { findById } = require("../models/users");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { protect } = require("../middlewares/auth");

//get all users
router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/api/users/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user);

    res.json(user);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
});

// get one user
router.get("/api/users/:id", getuser, (req, res) => {
  res.json(res.user);
  // try {
  //   let user = await User.findById(req.params.id);
  //   res.send(user.);
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  // }
  // res.send(req.params.id);
});

//create new user
router.post("/api/users", async (req, res) => {
  const salt = await bcrypt.genSalt();

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please Provide all fields!" });
  }

  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json("User already exists!");
    }

    const hashed = await bcrypt.hash(password, salt);

    let user = await User.create({
      name,
      email,
      password: hashed,
    });

    const token = jwt.sign(user.id, process.env.ACCESS_TOKEN_SECRET);

    res.status(201).json({
      success: true,
      token: token,
      user,
    });
  } catch (error) {
    console.log(error.message);
  }

  // const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // // const user1 = {
  // //   email: req.body.email,
  // //   password: req.body.password,
  // //   name: req.body.name,
  // // };
  // const accessToken = jwt.sign(user1, process.env.ACCESS_TOKEN_SECRET);

  // const users = new User({
  //   name: req.body.name,
  //   password: hashedPassword,
  //   email: req.body.email,
  //   token: accessToken,
  // });

  // const eUser = await User.find().count();
  // if (eUser === 0) {
  //   users.Role = "Admin";
  // } else {
  //   users.Role = "User";
  // }
  // try {
  //   // "Content-Type": application/json

  //   // const user1 = {
  //   //   email: req.body.email,
  //   //   password: req.body.password,
  //   //   name: req.body.name,
  //   // };
  //   // const accessToken = jwt.sign(user1, process.env.ACCESS_TOKEN_SECRET);
  //   // res.json({ accessToken: accessToken });
  //   const user = await users.save();
  //   // res.type("application/json");
  //   res.status(201).json(user);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
});

// user login with authentication
router.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    // return res.json("user not found");
    return res.status(401).json({ message: "user not found" });
  }

  // const user = await User.find({ where: { email: req.body.email } });

  try {
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(user.id, process.env.ACCESS_TOKEN_SECRET);

      // res.status(201).json({ message: "successfully logged in" });
      res.status(200).json({
        token,
        user,
      });
      // localStorage.setItem("token", JSON.stringify(token));
      // console.log(token);
    } else {
      // res.status(404).json({ message: "Incorrect password" });
      res.status(400).json("Not Allowed...Incorrect password or Username");
    }
  } catch {
    res.status(500).json("Server Internal Error");
  }
});

// patch ?
// put ?

// update a user
router.put("/api/users/:id", getuser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  try {
    const updateUser = await res.user.save();
    res.json(updateUser);
    // res.json(message: "user updated");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete a user
router.delete("/api/users/:id", getuser, async (req, res) => {
  try {
    await res.user.remove();
    // res.json({ message: "user deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// middleware
async function getuser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      res.status(404).json({ message: "user not found for this id" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;
  next();
}

module.exports = router;

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: {
//     type: String,
//     required: true,
//     minlength: 5,
//   },
//   createdDate: {
//     type: Date,
//     immutable: true, // can"t change the date statically
//     default: () => Date.now(),
//   },
// });

// module.exports = mongoose.model("users", userSchema);

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide a name"],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  Role: { type: String },
});

// middleware form encoding a password before saving and  it works fine //

// usersSchema.pre("save", async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(); // default is 10
//     encodedpassword = await bcrypt.hash(this.password, salt);
//     this.password = encodedpassword;
//     console.log(encodedpassword);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = mongoose.model("User", usersSchema);

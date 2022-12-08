const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config(); //loads all enviroment variables from .env files

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connection created"));

app.use(express.json());
app.use(cors());

const userRouter = require("./router/users");
app.use("/", userRouter);

const todoRouter = require("./router/todos");
app.use("/", todoRouter);

app.listen(4000, () => {
  console.log("server started!");
});

// const mongoose = require("mongoose");

// const User = require("./user");

// mongoose.connect("mongodb://localhost/react-app", () => {
//   console.log("connected");
// });
// async function createUser() {
//   try {
//     const user = await User.create({
//       name: "fev",
//       age: 21,
//       email: "fevtolla99@gmail.com",
//     });
//     console.log(user);
//   } catch (e) {
//     console.log(e.message);
//   }

// other way for creating  user
// const user = new User({
//   name: "fev",
//   age: 21,
//   email: "fevtolla99@gmail.com",
// });
// await user.save();
// }
// createUser();

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { protect } = require("../middlewares/auth");
const Todo = require("../models/Todo");
const User = require("../models/users");

// finding respective todos for the users
router.get("/api/todos", protect, async (req, res) => {
  try {
    const todo = await Todo.find({ user: req.user }).populate("user", ["name"]);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const todo = await Todo.find();
//     res.json(todo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// creating new todos
router.post("/api/todos", protect, async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    user: req.user,
    description: req.body.description,
  });

  try {
    const todos = await todo.save();
    res.status(201).json(todos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// getting one todo
router.get("/api/todos/:id", gettodo, (req, res) => {
  res.json(res.todo);
});
//updating todo
router.put("/api/todos/:id", gettodo, async (req, res) => {
  if (req.body.title != null) {
    res.todo.title = req.body.title;
  }
  if (req.body.description != null) {
    res.todo.description = req.body.description;
  }
  try {
    const updateTodo = await res.todo.save();
    res.json(updateTodo);
    // console.log(updateTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//deleting todo
router.delete("/api/todos/:id", gettodo, async (req, res) => {
  try {
    await res.todo.remove();
    console.log("removed");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// middleware
async function gettodo(req, res, next) {
  let todo;
  try {
    todo = await Todo.findById(req.params.id);
    if (todo == null) {
      res.status(404).json({ message: "todo not found for this id" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.todo = todo;
  next();
}

module.exports = router;

const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);

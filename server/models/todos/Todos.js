const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todoId: { type: String },
  userId: { type: String },
  title: { type: String },
  description: { type: String },
  status: { type: String },
  createdBy: { type: String },
  createdOn: { type: String },
  createdAt: { type: [String] },
});

const Todo = mongoose.model("todos", TodoSchema);

module.exports = { Todo };

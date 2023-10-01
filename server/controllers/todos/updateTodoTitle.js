const { User } = require("../../models/users/Users");
const { Todo } = require("../../models/todos/Todos");
const { statusCodes } = require("../../constants/globals/statuscodes");

const updateTodoTitle = async (req, res) => {
  try {
    const { newTitle } = req.body;
    const userId = req.params.id;
    const todoId = req.params.todoId;
    if (!newTitle) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Title is required" });
    }
    const user = await User.findOne({ id: userId });
    if (!user) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect user ID" });
    }
    const todo = await Todo.findOne({ todoId });
    if (!todo) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect todo ID" });
    }

    await Todo.findOneAndUpdate(
      {
        todoId,
      },
      {
        title: newTitle,
      }
    );
    const newTodo = await Todo.findOne({ todoId });
    res.status(statusCodes.SUCCESS).json({ todo: newTodo });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateTodoTitle };

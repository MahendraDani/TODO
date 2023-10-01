const { User } = require("../../models/users/Users");
const { Todo } = require("../../models/todos/Todos");
const { statusCodes } = require("../../constants/globals/statuscodes");

const deleteTodo = async (req, res) => {
  try {
    const userId = req.params.id;
    const todoId = req.params._id;
    if (!userId) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "userID is required!" });
      return;
    }
    if (!todoId) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Todo ID is required!" });
      return;
    }

    const user = await User.findOne({ id: userId });
    if (!user) {
      return res
        .status(statusCodes.NOT_FOUND)
        .json({ message: "User not found!" });
    }
    const todo = await Todo.findOne({ todoId });
    if (!todo) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect todo id" });
      return;
    }

    await Todo.findOneAndRemove({ todoId });
    res.status(200).json({ message: "Todo deleted successfully!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteTodo };

const { User } = require("../../models/users/Users");
const { Todo } = require("../../models/todos/Todos");
const { statusCodes } = require("../../constants/globals/statuscodes");

const deleteAllTodos = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "user ID is required!" });
    }

    const user = await User.findOne({ id: userId });
    if (!user) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect user ID" });
    }

    const todos = await Todo.find({ userId });
    if (!todos) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "No todos available" });
    }

    for (let i = 0; i < todos.length; i++) {
      await Todo.findOneAndRemove({ userId });
    }

    return res
      .status(statusCodes.SUCCESS)
      .json({ message: "Todos deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteAllTodos };

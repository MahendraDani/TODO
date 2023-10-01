const { statusCodes } = require("../../constants/globals/statuscodes");
const { Todo } = require("../../models/todos/Todos");

const getTodo = async (req, res) => {
  try {
    const todoId = req.params._id;
    if (!todoId) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Todo id is required!" });
      return;
    }
    const todo = await Todo.findOne({ todoId });
    if (!todo) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect todo id!" });
      return;
    }

    res.status(statusCodes.SUCCESS).json(todo);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTodo };

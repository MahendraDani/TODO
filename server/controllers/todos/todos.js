const { Todo } = require("../../models/todos/Todos");
const { statusCodes } = require("../../constants/globals/statuscodes");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(statusCodes.SUCCESS).json(todos);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllTodos };

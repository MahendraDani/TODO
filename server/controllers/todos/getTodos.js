const { User } = require("../../models/users/Users");
const { Todo } = require("../../models/todos/Todos");
const { statusCodes } = require("../../constants/globals/statuscodes");

const getTodos = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "UserId is required!" });
      return;
    }
    const user = await User.findOne({ id: userId });
    if (!user) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect user id" });
      return;
    }
    const todos = await Todo.find({ userId });
    if (!todos) {
      res
        .status(statusCodes.NOT_FOUND)
        .json({ message: "User has no avaiable todos!" });
      return;
    }
    res.status(statusCodes.SUCCESS).json(todos);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTodos };

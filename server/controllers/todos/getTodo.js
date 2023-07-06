const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/statuscodes");
const { getTodoIndexFromId } = require("../../constants/getTodoIndexFromId");

const TODOS_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "todos",
  "todos.json"
);

const getTodo = async (req, res) => {
  try {
    const todoId = req.params._id;
    if (!todoId) {
      resourceLimits
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Todo id is required!" });
    } else {
      const TODOS = await JSON.parse(fs.readFileSync(TODOS_DIRECTORY, "utf8"));
      const todoIndex = getTodoIndexFromId(TODOS, todoId);
      if (todoIndex === -1) {
        res
          .status(statusCodes.FORBIDDEN)
          .json({ message: "Invalid or incorrect todo id!" });
      } else {
        res.status(statusCodes.SUCCESS).json(TODOS[todoIndex]);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTodo };

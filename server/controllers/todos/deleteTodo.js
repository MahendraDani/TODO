const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/statuscodes");
const { getTodoIndexFromId } = require("../../constants/getTodoIndexFromId");
const { removeTodoById } = require("../../constants/removeTodoById");
const { getIndexFromId } = require("../../constants/getIndexFromId");

const TODOS_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "todos",
  "todos.json"
);

const USERS_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "users",
  "users.json"
);
const deleteTodo = async (req, res) => {
  const userId = req.headers.id;
  if (!userId) {
    res.status(statusCodes.FORBIDDEN).json({ message: "userID is required!" });
  } else {
    const USERS = await JSON.parse(fs.readFileSync(USERS_DIRECTORY, "utf8"));
    const userIndex = getIndexFromId(USERS, userId);
    if (userIndex === -1) {
      return res
        .status(statusCodes.NOT_FOUND)
        .json({ message: "User not found!" });
    } else {
      const todoId = req.params._id;
      if (!todoId) {
        await res
          .status(statusCodes.BAD_REQUEST)
          .json({ message: "Todo Id is required!" });
      } else {
        const todoData = fs.readFileSync(TODOS_DIRECTORY, "utf8");
        let TODOS = await JSON.parse(todoData);

        const todoIndex = getTodoIndexFromId(TODOS, todoId);
        if (todoIndex === -1) {
          await res
            .status(statusCodes.FORBIDDEN)
            .json({ message: "Invalid or incorrect todo id" });
        } else {
          TODOS = removeTodoById(TODOS, todoId);
          fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
          await res.status(200).json({ message: "Todo deleted successfully!" });
        }
      }
    }
  }
};

module.exports = { deleteTodo };

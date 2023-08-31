const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/globals/statuscodes");
const {
  updateTodoTitleById,
} = require("../../constants/todos/updateTodoTitleById");
const { getIndexFromId } = require("../../constants/globals/getIndexFromId");

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

const updateTodoTitle = async (req, res) => {
  try {
    const { newTitle } = req.body;
    const userId = req.headers.id;
    const todoId = req.params.todoId;
    if (!newTitle) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Title is required" });
    }
    const USERS = await JSON.parse(fs.readFileSync(USERS_DIRECTORY, "utf8"));
    const userIndex = getIndexFromId(USERS, userId);
    if (userIndex === -1) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect user ID" });
    }

    if (userIndex !== -1) {
      let TODOS = await JSON.parse(fs.readFileSync(TODOS_DIRECTORY, "utf8"));
      TODOS = updateTodoTitleById(TODOS, todoId, newTitle);
      fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
      res
        .status(statusCodes.SUCCESS)
        .json({ message: "Title updated succesfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateTodoTitle };

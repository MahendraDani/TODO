const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/globals/statuscodes");
const { getIndexFromId } = require("../../constants/globals/getIndexFromId");
const {
  getTodoIndexFromId,
} = require("../../constants/todos/getTodoIndexFromId");
const {
  updateTodoTitleById,
} = require("../../constants/todos/updateTodoTitleById");
const {
  updateTodoDescriptionById,
} = require("../../constants/todos/updateTodoDescriptionById");
const {
  updateTodoStatusById,
} = require("../../constants/todos/updateTodoStatusById");

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

const updateTodo = async (req, res) => {
  try {
    // check userID from header
    const userId = req.headers.id;
    if (!userId) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "User Id not found!" });
    }

    const USERS = await JSON.parse(fs.readFileSync(USERS_DIRECTORY, "utf8"));
    const userIndex = getIndexFromId(USERS, userId);
    if (userIndex === -1) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect user ID" });
    }

    const todoId = req.params.todoId;
    if (!todoId) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "TodoId not fonud" });
    }

    let TODOS = await JSON.parse(fs.readFileSync(TODOS_DIRECTORY, "utf8"));
    const todoIndex = getTodoIndexFromId(TODOS, todoId);
    if (todoIndex === -1) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect todo Id" });
    }

    const { newTitle, newDescription, newStatus } = req.body;
    if (newTitle && !newDescription) {
      // Only update title
      TODOS = updateTodoTitleById(TODOS, todoId, newTitle);
      fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
      return res.status(statusCodes.SUCCESS).json({
        message: "Todo updated successfully",
        todo: TODOS[todoIndex],
      });
    }

    if (!newTitle && newDescription) {
      // only update description
      TODOS = updateTodoDescriptionById(TODOS, todoId, newDescription);
      fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
      return res
        .status(statusCodes.SUCCESS)
        .json({ message: "Todo updated successfully", todo: TODOS[todoIndex] });
    }

    if (newTitle && newDescription && newStatus) {
      // update both title and description
      TODOS = updateTodoTitleById(TODOS, todoId, newTitle);
      TODOS = updateTodoDescriptionById(TODOS, todoId, newDescription);
      TODOS = updateTodoStatusById(TODOS, todoId, newStatus);
      fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
      return res.status(statusCodes.SUCCESS).json({
        message: "Todo updated successfully",
        todo: TODOS[todoIndex],
      });
    }

    if (newStatus) {
      TODOS = updateTodoStatusById(TODOS, todoId, newStatus);
      fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
      return res.status(statusCodes.SUCCESS).json({
        message: "Todo updated successfully",
        todo: TODOS[todoIndex],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateTodo };

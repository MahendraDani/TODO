const fs = require("fs");
const path = require("path");
const { Todo } = require("../../models/todos/Todos");
const { User } = require("../../models/users/Users");
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
    const userId = req.params.id;
    const todoId = req.params.todoId;
    if (!userId) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "User Id not found!" });
    }

    if (!todoId) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "TodoId not fonud" });
    }

    // const USERS = await JSON.parse(fs.readFileSync(USERS_DIRECTORY, "utf8"));
    // const userIndex = getIndexFromId(USERS, userId);
    // if (userIndex === -1) {
    //   return res
    //     .status(statusCodes.FORBIDDEN)
    //     .json({ message: "Invalid or incorrect user ID" });
    // }
    const user = await User.findOne({ id: userId });
    if (!userId) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect user ID" });
    }

    // let TODOS = await JSON.parse(fs.readFileSync(TODOS_DIRECTORY, "utf8"));
    // const todoIndex = getTodoIndexFromId(TODOS, todoId);
    // if (todoIndex === -1) {
    //   return res
    //     .status(statusCodes.FORBIDDEN)
    //     .json({ message: "Invalid or incorrect todo Id" });
    // }

    const todo = await Todo.findOne({ todoId });
    if (!todo) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect todo Id" });
    }

    const { newTitle, newDescription, newStatus } = req.body;
    if (newTitle && !newDescription) {
      // Only update title
      // TODOS = updateTodoTitleById(TODOS, todoId, newTitle);
      // fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
      // return res.status(statusCodes.SUCCESS).json({
      //   message: "Todo updated successfully",
      //   todo: TODOS[todoIndex],
      // });
      await Todo.findOneAndUpdate(
        { todoId },
        {
          title: newTitle,
        }
      );
      const newTodo = await Todo.findOne({ todoId });
      return res.status(statusCodes.SUCCESS).json({ todo: newTodo });
    }

    if (!newTitle && newDescription) {
      // only update description
      // TODOS = updateTodoDescriptionById(TODOS, todoId, newDescription);
      // fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
      // return res
      //   .status(statusCodes.SUCCESS)
      //   .json({ message: "Todo updated successfully", todo: TODOS[todoIndex] });
      await Todo.findOneAndUpdate({ todoId }, { description: newDescription });
      const newTodo = await Todo.findOne({ todoId });
      return res.status(statusCodes.SUCCESS).json({ todo: newTodo });
    }

    if (newTitle && newDescription && newStatus) {
      // update both title and description
      // TODOS = updateTodoTitleById(TODOS, todoId, newTitle);
      // TODOS = updateTodoDescriptionById(TODOS, todoId, newDescription);
      // TODOS = updateTodoStatusById(TODOS, todoId, newStatus);
      // fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
      // return res.status(statusCodes.SUCCESS).json({
      //   message: "Todo updated successfully",
      //   todo: TODOS[todoIndex],
      // });
      await Todo.findOneAndUpdate(
        { todoId },
        {
          title: newTitle,
          description: newDescription,
          status: newStatus,
        }
      );
      const newTodo = await Todo.findOne({ todoId });
      return res.status(statusCodes.SUCCESS).json({ todo: newTodo });
    }

    if (newStatus) {
      // TODOS = updateTodoStatusById(TODOS, todoId, newStatus);
      // fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
      // return res.status(statusCodes.SUCCESS).json({
      //   message: "Todo updated successfully",
      //   todo: TODOS[todoIndex],
      // });
      await Todo.findOneAndUpdate(
        { todoId },
        {
          status: newStatus,
        }
      );
      const newTodo = await Todo.findOne({ todoId });
      return res.status(statusCodes.SUCCESS).json({ todo: newTodo });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateTodo };

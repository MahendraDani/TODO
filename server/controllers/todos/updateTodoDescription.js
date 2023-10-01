const fs = require("fs");
const path = require("path");
const { User } = require("../../models/users/Users");
const { Todo } = require("../../models/todos/Todos");
const { statusCodes } = require("../../constants/globals/statuscodes");
const {
  updateTodoDescriptionById,
} = require("../../constants/todos/updateTodoDescriptionById");
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

const updateTodoDescription = async (req, res) => {
  try {
    const { newDescription } = req.body;
    const userId = req.params.id;
    const todoId = req.params.todoId;
    if (!newDescription) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Description is required" });
    }
    const user = await User.findOne({ id: userId });
    if (!user) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect user ID" });
    }
    const todo = await Todo.findOne({ todoId });
    if (!todo) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect todo ID" });
    }

    await Todo.findOneAndUpdate(
      { todoId },
      {
        description: newDescription,
      }
    );
    const newTodo = await Todo.findOne({ todoId });
    return res.status(statusCodes.SUCCESS).json({ todo: newTodo });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateTodoDescription };
// const USERS = await JSON.parse(fs.readFileSync(USERS_DIRECTORY, "utf8"));
//     const userIndex = getIndexFromId(USERS, userId);
//     if (userIndex === -1) {
//       return res
//         .status(statusCodes.FORBIDDEN)
//         .json({ message: "Invalid or incorrect user ID" });
//     }

//     if (userIndex !== -1) {
//       let TODOS = await JSON.parse(fs.readFileSync(TODOS_DIRECTORY, "utf8"));
//       TODOS = updateTodoDescriptionById(TODOS, todoId, newDescription);
//       fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
//       res
//         .status(statusCodes.SUCCESS)
//         .json({ message: "Title updated succesfully" });
//     }

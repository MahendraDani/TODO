const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/globals/statuscodes");
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

// Get all todos of a particular user!
const getTodos = async (req, res) => {
  try {
    const userId = req.headers.id;
    if (!userId) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "UserId is required!" });
    } else {
      const usersData = fs.readFileSync(USERS_DIRECTORY, "utf8");
      const USERS = await JSON.parse(usersData);

      const userIndex = getIndexFromId(USERS, userId);
      if (userIndex === -1) {
        res
          .status(statusCodes.FORBIDDEN)
          .json({ message: "Invalid or incorrect user id" });
      } else {
        const todosData = fs.readFileSync(TODOS_DIRECTORY, "utf8");
        const TODOS = await JSON.parse(todosData);

        const todosOfUser = TODOS.filter((todo) => todo.userId === userId);
        if (!todosOfUser) {
          res
            .status(statusCodes.NOT_FOUND)
            .json({ message: "User has no avaiable todos!" });
        } else {
          res.status(200).json(todosOfUser);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTodos };

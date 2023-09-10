const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const { statusCodes } = require("../../constants/globals/statuscodes");
const { getIndexFromId } = require("../../constants/globals/getIndexFromId");
const { format } = require("date-fns");
const { setTime } = require("../../constants/globals/time");

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

const createTodo = async (req, res) => {
  try {
    const userId = req.headers.id; // This is users's id should be set from frontend
    const { title, description, status } = req.body;
    if (title === "" || description === "" || status === "") {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "All fields are required to create a todo!" });
    } else {
      if (!userId) {
        res
          .status(statusCodes.BAD_REQUEST)
          .json({ message: "User Id is required!" });
      } else {
        const usersData = fs.readFileSync(USERS_DIRECTORY, "utf8");
        const USERS = await JSON.parse(usersData);

        const todosData = fs.readFileSync(TODOS_DIRECTORY, "utf8");
        let TODOS = await JSON.parse(todosData);

        const userIndex = getIndexFromId(USERS, userId);
        if (userIndex === -1) {
          res
            .status(statusCodes.NOT_FOUND)
            .json({ message: "User not found!" });
        } else {
          if (USERS[userIndex].id !== userId) {
            res
              .status(statusCodes.FORBIDDEN)
              .json({ message: "Invalid userid" });
          } else {
            const newTodo = {
              _id: uuid(),
              userId: userId,
              title: title,
              description: description,
              status: status.toLowerCase(),
              createdBy: USERS[userIndex].fullName,
              createdOn: format(new Date(), "dd-MM-yyyy").split("-").join("."),
              createdAt: setTime(),
            };

            TODOS.push(newTodo);
            fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
            res
              .status(statusCodes.CREATED)
              .json({ message: "Todo created successfully", todo: newTodo });
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTodo };

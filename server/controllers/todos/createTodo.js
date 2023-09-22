const { v4: uuid } = require("uuid");
const { statusCodes } = require("../../constants/globals/statuscodes");
const { User } = require("../../models/users/Users");
const { Todo } = require("../../models/todos/Todos");
const { format } = require("date-fns");
const { setTime } = require("../../constants/globals/time");

const createTodo = async (req, res) => {
  try {
    const userId = req.headers.id;

    if (!userId) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "User Id is required!" });
      return;
    }
    const { title, description, status } = req.body;
    if (!title || !description || !status) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "All fields are required to create a todo!" });
      return;
    }

    const user = User.findOne({ id: userId });
    if (!user) {
      res.status(statusCodes.NOT_FOUND).json({ message: "User not found!" });
      return;
    }

    const newTodo = new Todo({
      todoId: uuid(),
      userId: userId,
      title: title,
      description: description,
      status: status.toLowerCase(),
      createdBy: user.fullName,
      createdOn: format(new Date(), "dd-MM-yyyy").split("-").join("."),
      createdAt: setTime(),
    });

    await newTodo.save();
    res
      .status(statusCodes.CREATED)
      .json({ message: "Todo created successfully", todo: newTodo });
    return;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTodo };

// if (title === "" || description === "" || status === "") {
//   res
//     .status(statusCodes.BAD_REQUEST)
//     .json({ message: "All fields are required to create a todo!" });
// } else {
//   if (!userId) {
//     res
//       .status(statusCodes.BAD_REQUEST)
//       .json({ message: "User Id is required!" });
//   } else {
//     const usersData = fs.readFileSync(USERS_DIRECTORY, "utf8");
//     const USERS = await JSON.parse(usersData);

//     const todosData = fs.readFileSync(TODOS_DIRECTORY, "utf8");
//     let TODOS = await JSON.parse(todosData);

//     const userIndex = getIndexFromId(USERS, userId);
//     if (userIndex === -1) {
//       res
//         .status(statusCodes.NOT_FOUND)
//         .json({ message: "User not found!" });
//     } else {
//       if (USERS[userIndex].id !== userId) {
//         res
//           .status(statusCodes.FORBIDDEN)
//           .json({ message: "Invalid userid" });
//       } else {
//         const newTodo = {
//           _id: uuid(),
//           userId: userId,
//           title: title,
//           description: description,
//           status: status.toLowerCase(),
//           createdBy: USERS[userIndex].fullName,
//           createdOn: format(new Date(), "dd-MM-yyyy").split("-").join("."),
//           createdAt: setTime(),
//         };

//         TODOS.push(newTodo);
//         fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
//         res
//           .status(statusCodes.CREATED)
//           .json({ message: "Todo created successfully", todo: newTodo });
//       }
//     }
//   }
// }

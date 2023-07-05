const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/statuscodes");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");

const USERS_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "users",
  "users.json"
);

const getIndexFromEmail = (arr, email) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].email === email) {
      return i;
    }
  }
  return -1;
};
const signupController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "All fields are required!" });
    } else {
      const file = fs.readFileSync(USERS_DIRECTORY, "utf8");
      const TODOS = JSON.parse(file);

      const userIndex = getIndexFromEmail(TODOS, email);
      if (userIndex !== -1) {
        res
          .status(statusCodes.UNAUTHORIZED)
          .json({ message: "User is already signed up!" });
      } else {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = {
          id: uuid(),
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPassword,
          createdAt: new Date().toISOString(),
        };

        TODOS.push(newUser);
        fs.writeFileSync(USERS_DIRECTORY, JSON.stringify(TODOS));
        res.status(statusCodes.SUCCESS).json({
          message: "User signed up successfully",
          id: newUser.id,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signupController };

const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/statuscodes");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
      const data = fs.readFileSync(USERS_DIRECTORY, "utf8");
      let USERS = await JSON.parse(data);

      const userIndex = getIndexFromEmail(USERS, email);
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

        USERS.push(newUser);
        fs.writeFileSync(USERS_DIRECTORY, JSON.stringify(USERS));
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

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "All fields are required!" });
    } else {
      // check if user exists!
      const data = fs.readFileSync(USERS_DIRECTORY, "utf-8");
      let USERS = await JSON.parse(data);

      const userIndex = getIndexFromEmail(USERS, email);
      if (userIndex === -1) {
        res
          .status(statusCodes.UNAUTHORIZED)
          .json({ message: "Email or password invalid" });
      } else {
        // check if the password is valid for the email at userIndex
        const userExists = bcrypt.compareSync(
          password,
          USERS[userIndex].password
        );
        if (!userExists) {
          res
            .status(statusCodes.UNAUTHORIZED)
            .json({ message: "Invalid password!" });
        } else {
          // sign jwt here
          const token = jwt.sign(
            {
              id: USERS[userIndex].id,
              createdAt: USERS[userIndex].createdAt,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );
          res.status(statusCodes.SUCCESS).json({
            message: "User logged in successfully",
            accessToken: token,
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signupController, loginController };

const fs = require("fs");
const path = require("path");
const { format } = require("date-fns");
const { statusCodes } = require("../../constants/globals/statuscodes");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  getIndexFromEmail,
} = require("../../constants/globals/getIndexFromEmail");
const { setTime } = require("../../constants/globals/time");

const { User } = require("../../models/users/Users");

const USERS_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "users",
  "users.json"
);

const signupController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "All fields are required!" });
      return;
    }
    // check if user with an email already exists in data
    const isExistingUser = await User.findOne({ email });
    if (isExistingUser) {
      res
        .status(statusCodes.UNAUTHORIZED)
        .json({ message: "User is already signed up!" });
      return;
    }
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      id: uuid(),
      firstName: firstName,
      lastName: lastName,
      fullName: `${firstName} ${lastName}`,
      email: email,
      password: hashedPassword,
      createdOn: format(new Date(), "dd-MM-yyyy").split("-").join("."),
      createdAt: setTime(),
    });
    await newUser.save();
    const token = jwt.sign(
      {
        id: newUser.id,
        createdAt: newUser.createdAt,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    res.status(statusCodes.SUCCESS).json({
      message: "User signed up successfully",
      userId: newUser.id,
      fullName: newUser.fullName,
      accessToken: token,
    });
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
            { expiresIn: "3d" }
          );
          res.status(statusCodes.SUCCESS).json({
            message: "User logged in successfully",
            accessToken: token,
            userId: USERS[userIndex].id,
            user: USERS[userIndex],
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signupController, loginController };

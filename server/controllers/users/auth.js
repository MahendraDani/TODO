const { format } = require("date-fns");
const { statusCodes } = require("../../constants/globals/statuscodes");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { setTime } = require("../../constants/globals/time");
const { User } = require("../../models/users/Users");

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
      return;
    }
    await User.findOne({ email }).then((user) => {
      if (!user) {
        res
          .status(statusCodes.UNAUTHORIZED)
          .json({ message: "Email or password invalid" });
        return;
      }

      bcrypt.compare(password, user.password).then((isPasswordMatch) => {
        if (!isPasswordMatch) {
          res
            .status(statusCodes.UNAUTHORIZED)
            .json({ message: "Invalid password!" });
          return;
        }
        const token = jwt.sign(
          {
            id: user.id,
            createdAt: user.createdAt,
          },
          process.env.JWT_SECRET,
          { expiresIn: "3d" }
        );
        res.status(statusCodes.SUCCESS).json({
          message: "User logged in successfully",
          accessToken: token,
          userId: user.id,
          user: user,
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signupController, loginController };

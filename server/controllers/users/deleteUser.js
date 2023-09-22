const { User } = require("../../models/users/Users");
const { statusCodes } = require("../../constants/globals/statuscodes");

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({ id });
    if (!user) {
      res.status(statusCodes.NOT_FOUND).json({ message: "User not found!" });
      return;
    }

    await User.findOneAndDelete({ _id: user._id });
    res
      .status(statusCodes.SUCCESS)
      .json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteUser };

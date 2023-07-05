const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/statuscodes");
const USERS_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "users",
  "users.json"
);

const getIndexFromId = (arr, id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return i;
    }
  }
  return -1;
};

const removeUserById = (arr, id) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id !== id) {
      newArray.push(arr[i]);
    } else {
      continue;
    }
  }
  return newArray;
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = fs.readFileSync(USERS_DIRECTORY, "utf8");
    let USERS = await JSON.parse(data);
    const userIndex = getIndexFromId(USERS, id);
    if (userIndex === -1) {
      res.status(statusCodes.NOT_FOUND).json({ message: "User not found!" });
    } else {
      // implement delete funcationaly;
      USERS = removeUserById(USERS, id);
      fs.writeFileSync(USERS_DIRECTORY, JSON.stringify(USERS));
      res
        .status(statusCodes.SUCCESS)
        .json({ message: "User deleted successfully!" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteUser };

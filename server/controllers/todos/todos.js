const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/globals/statuscodes");
const TODOS_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "todos",
  "todos.json"
);

const getAllTodos = async (req, res) => {
  try {
    const data = fs.readFileSync(TODOS_DIRECTORY, "utf8");
    const TODOS = await JSON.parse(data);
    res.status(statusCodes.SUCCESS).json(TODOS);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllTodos };

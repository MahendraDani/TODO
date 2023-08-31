const fs = require("fs");
const path = require("path");

const TODOS_DIRECTORY = path.join(__dirname, "models", "todos", "todos.json");

const updateTodoTitleById = (arr, id, value) => {
  let newArray = arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._id === id) {
      newArray[i].title = value;
    }
  }
  return newArray;
};

const updateTodo = async () => {
  try {
    let TODOS = await JSON.parse(fs.readFileSync(TODOS_DIRECTORY, "utf-8"));
    TODOS = updateTodoTitleById(
      TODOS,
      "0ef175b1-d10a-4498-b026-36613bf5e659",
      "ROOOOOOOCK ON"
    );
    fs.writeFileSync(TODOS_DIRECTORY, JSON.stringify(TODOS));
  } catch (error) {
    console.log(error);
  }
};

updateTodo();

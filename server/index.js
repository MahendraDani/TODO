require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const bodyParser = require("body-parser");
const cors = require("cors");

const { validateUser } = require("./middlewares/validateUser");

app.use(bodyParser.json());
app.use(cors());

//Routes
app.use("/", require("./routes/index")); // home route
app.use("/users", require("./routes/users/auth")); // login and signup user
app.use("/users", validateUser, require("./routes/todos/getTodo"));
app.use("/users", validateUser, require("./routes/todos/getTodos")); // get all todos of a particular user!
app.use("/users", validateUser, require("./routes/users/deleteUser")); // delete user

app.use("/todos", require("./routes/todos/todos")); // get all todos from db
app.use("/todos", validateUser, require("./routes/todos/createTodo")); //create a new todo
app.use("/todos", validateUser, require("./routes/todos/deleteTodo")); // delete a todo by its id

app.use("/users", validateUser, require("./routes/notes/createNote")); // create a new note
app.use("/users", validateUser, require("./routes/notes/getNote")); // get a note by its id

app.use("/notes", validateUser, require("./routes/notes/getNotes")); // get all notes by user id
app.use("/notes", validateUser, require("./routes/notes/deleteNote"));
app.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});

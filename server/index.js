require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const bodyParser = require("body-parser");

const { validateUser } = require("./middlewares/validateUser");

app.use(bodyParser.json());

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users/auth"));

app.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});

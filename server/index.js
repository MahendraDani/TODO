const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users/auth"));

app.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});

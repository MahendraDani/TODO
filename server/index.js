const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});

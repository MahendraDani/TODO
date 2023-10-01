const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1/todo")
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDB };

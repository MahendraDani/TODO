const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.LOCAL_DATABASE_URL)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDB };

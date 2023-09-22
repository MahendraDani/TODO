const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  createdOn: { type: String },
  createdAt: { type: [String] },
});

const User = mongoose.model("users", UserSchema);
module.exports = { User };

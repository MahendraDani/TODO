const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/statuscodes");
const { json } = require("body-parser");
const { v4: uuid } = require("uuid");
const { format } = require("date-fns");
const { getIndexFromId } = require("../../constants/getIndexFromId");

const NOTES_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "notes",
  "notes.json"
);

const USERS_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "users",
  "users.json"
);

const createNote = async (req, res) => {
  try {
    const userId = req.headers.id;
    const USERS = await JSON.parse(fs.readFileSync(USERS_DIRECTORY, "utf-8"));
    const userIndex = getIndexFromId(USERS, userId);
    if (userIndex === -1) {
      res.status(statusCodes.FORBIDDEN).json({ message: "Incorrect user ID" });
    } else {
      const { note, title } = req.body;
      let NOTES = await JSON.parse(fs.readFileSync(NOTES_DIRECTORY, "utf8"));
      const newNote = {
        noteId: uuid(),
        userId: userId,
        note: note,
        title: title,
        createdOn: format(new Date(), "dd-MM-yyyy"),
        createdAt: format(new Date(), "HH:mm:ss"),
        createdBy: USERS[userIndex].fullName,
      };
      NOTES.push(newNote);
      await fs.writeFileSync(NOTES_DIRECTORY, JSON.stringify(NOTES));
      res
        .status(statusCodes.CREATED)
        .json({ message: "Note successfully created", note: newNote });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createNote };

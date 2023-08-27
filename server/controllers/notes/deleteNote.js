const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/globals/statuscodes");
const { getNoteIndexById } = require("../../constants/notes/getNoteIndexById");
const { getIndexFromId } = require("../../constants/globals/getIndexFromId");
const {
  getNotesOfUserByUserId,
} = require("../../constants/notes/getNotesOfUserByuserId");
const { removeNoteById } = require("../../constants/notes/removeNoteById");

const USERS_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "users",
  "users.json"
);

const NOTES_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "notes",
  "notes.json"
);

const deleteNote = async (req, res) => {
  try {
    const userId = req.headers.id;
    if (!userId) {
      res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "User id is required!" });
    } else {
      const USERS = await JSON.parse(fs.readFileSync(USERS_DIRECTORY, "utf8"));
      const userIndex = getIndexFromId(USERS, userId);
      if (userIndex === -1) {
        res.status(statusCodes.NOT_FOUND).json({ message: "User not found!" });
      } else {
        const noteId = req.params.noteId;
        if (!noteId) {
          res
            .status(statusCodes.BAD_REQUEST)
            .json({ message: "Invaild or incorrect noteId" });
        } else {
          let NOTES = await JSON.parse(
            fs.readFileSync(NOTES_DIRECTORY, "utf8")
          );
          const notesOfUser = getNotesOfUserByUserId(NOTES, userId);
          const noteIndex = getNoteIndexById(notesOfUser, noteId);
          if (noteIndex === -1) {
            res
              .status(statusCodes.FORBIDDEN)
              .json({ message: "Invalid of incorrrect note id" });
          } else {
            NOTES = removeNoteById(notesOfUser, noteId);
            fs.writeFileSync(NOTES_DIRECTORY, JSON.stringify(NOTES));

            res
              .status(statusCodes.SUCCESS)
              .json({ message: "Note deleted successfully" });
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteNote };

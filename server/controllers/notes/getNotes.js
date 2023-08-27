const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/statuscodes");
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

const getNotes = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ messaage: "User ID is required" });
    } else {
      const USERS = await JSON.parse(fs.readFileSync(USERS_DIRECTORY, "utf8"));
      const userIndex = getIndexFromId(USERS, userId);
      if (userIndex == -1) {
        res
          .status(statusCodes.FORBIDDEN)
          .json({ message: "Invalid or incorrect user id" });
      } else {
        const NOTES = await JSON.parse(
          fs.readFileSync(NOTES_DIRECTORY, "utf8")
        );
        const NotesOfUser = NOTES.filter((note) => note.userId == userId);
        if (!NotesOfUser) {
          res
            .status(statusCodes.NOT_FOUND)
            .json({ message: "User has no avaiable notes!" });
        } else {
          res.status(statusCodes.SUCCESS).json(NotesOfUser);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getNotes };

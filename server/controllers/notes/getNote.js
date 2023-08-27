const fs = require("fs");
const path = require("path");
const { statusCodes } = require("../../constants/globals/statuscodes");

const NOTES_DIRECTORY = path.join(
  __dirname,
  "..",
  "..",
  "models",
  "notes",
  "notes.json"
);

const getNote = async (req, res) => {
  try {
    const noteId = req.params.__id;
    if (!noteId) {
      res.status(statusCodes.BAD_REQUEST).json({ message: "Id is required!" });
    } else {
      const NOTES = await JSON.parse(fs.readFileSync(NOTES_DIRECTORY, "utf8"));
      console.log(NOTES);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getNote };

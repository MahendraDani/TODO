const router = require("express").Router();
const { deleteNote } = require("../../controllers/notes/deleteNote");
router.delete("/delete/:noteId", deleteNote);

module.exports = router;

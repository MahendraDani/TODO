const router = require("express").Router();
const { createNote } = require("../../controllers/notes/createNote");

router.post("/notes", createNote);
module.exports = router;

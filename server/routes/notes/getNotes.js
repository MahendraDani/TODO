const router = require("express").Router();
const { getNotes } = require("../../controllers/notes/getNotes");
router.get("/notes/:userId", getNotes);

module.exports = router;

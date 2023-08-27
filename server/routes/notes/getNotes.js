const router = require("express").Router();
const { getNotes } = require("../../controllers/notes/getNotes");
router.get("/:userId", getNotes);

module.exports = router;

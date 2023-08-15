const router = require("express").Router();
const { getNote } = require("../../controllers/notes/getNote");
router.get("/notes/:__id", getNote);

module.exports = router;

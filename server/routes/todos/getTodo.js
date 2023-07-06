const router = require("express").Router();
const { getTodo } = require("../../controllers/todos/getTodo");
router.get("/todos/:_id", getTodo);

module.exports = router;

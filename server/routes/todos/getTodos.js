const router = require("express").Router();
const { getTodos } = require("../../controllers/todos/getTodos");

router.get("/todos", getTodos);

module.exports = router;

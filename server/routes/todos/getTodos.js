const router = require("express").Router();
const { getTodos } = require("../../controllers/todos/getTodos");

router.get("/todos/all/:id", getTodos);

module.exports = router;

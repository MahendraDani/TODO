const router = require("express").Router();
const { createTodo } = require("../../controllers/todos/createTodo");

router.post("/", createTodo);

module.exports = router;

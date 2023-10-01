const router = require("express").Router();
const { updateTodo } = require("../../controllers/todos/updateTodo");

router.put("/update/:id/:todoId", updateTodo);

module.exports = router;

const router = require("express").Router();
const { updateTodoTitle } = require("../../controllers/todos/updateTodoTitle");

router.put("/update/:todoId", updateTodoTitle);

module.exports = router;

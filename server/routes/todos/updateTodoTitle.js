const router = require("express").Router();
const { updateTodoTitle } = require("../../controllers/todos/updateTodoTitle");

router.put("/update/title/:id/:todoId", updateTodoTitle);

module.exports = router;

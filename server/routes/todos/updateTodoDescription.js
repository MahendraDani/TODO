const router = require("express").Router();
const {
  updateTodoDescription,
} = require("../../controllers/todos/updateTodoDescription");

router.put("/update/desc/:id/:todoId", updateTodoDescription);

module.exports = router;

const router = require("express").Router();
const { deleteTodo } = require("../../controllers/todos/deleteTodo");

router.delete("/delete/:_id", deleteTodo);

module.exports = router;

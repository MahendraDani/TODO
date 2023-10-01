const express = require("express");
const router = express.Router();

const { deleteAllTodos } = require("../../controllers/todos/deleteAllTodos");

router.delete("/delete/all/:id", deleteAllTodos);

module.exports = router;

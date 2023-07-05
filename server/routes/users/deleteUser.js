const router = require("express").Router();
const { deleteUser } = require("../../controllers/users/deleteUser");

router.delete("/delete/:id", deleteUser);

module.exports = router;

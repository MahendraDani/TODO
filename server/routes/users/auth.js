const router = require("express").Router();

const { signupController } = require("../../controllers/users/auth");
router.post("/signup", signupController);

module.exports = router;

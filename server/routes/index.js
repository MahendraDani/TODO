const router = require("express").Router();
const { indexRouteController } = require("../controllers/index");
router.get("/", indexRouteController);

module.exports = router;

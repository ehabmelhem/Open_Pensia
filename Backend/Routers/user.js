const router = require("express").Router();
const userController = require("../Controller/user");

router.post("/add-user", userController.addUser);
module.exports = router;

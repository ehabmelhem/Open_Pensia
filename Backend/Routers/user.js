const router = require("express").Router();
const userController = require("../Controller/user");
const jwt = require("jwt-simple");
const secret = "1234";

function checkRole(req, res, next) {
  try {
    let role = req.cookies.role;
    decRole = jwt.decode(role, secret);
    if (decRole.role === "user") {
      next();
    } else {
      res.send({ ok: false, messege: "you dont have Premeision" });
    }
  } catch (e) {
    res.send({ ok: false, messege: "you have to login" });
  }
}
router
  .route("/add-approved-user")
  .post(userController.addApprovedUser);

router
  .route("/add-user")
  .post(userController.addUser);

router
  .route("/login")
  .post(userController.login);

router    // needs checkRole
  .route("/user-voting-history")
  .post(checkRole, userController.getUserVotingHistory);

module.exports = router;

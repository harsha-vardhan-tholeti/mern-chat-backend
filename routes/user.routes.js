const express = require("express");
const {
  registerUser,
  loginUser,
  forgotUserPassword,
  resetUserPassword,
  updatePassword,
} = require("../controllers/auth.controller");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgotPassword", forgotUserPassword);
router.patch("/resetPassword/:token", resetUserPassword);
router.patch("/updatePassword", isAuthenticatedUser, updatePassword);

module.exports = router;

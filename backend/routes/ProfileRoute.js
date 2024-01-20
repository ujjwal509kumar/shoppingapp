const express = require("express");
const profileInfo = require("../controllers/ProfileController");
const auth = require("../middleware/auth");

const profileRouter = express.Router();

profileRouter.get("/",auth, profileInfo);

module.exports = profileRouter;
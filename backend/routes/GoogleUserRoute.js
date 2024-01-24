const setpassword = require("../controllers/GoogleUsrRegest");
const express = require("express");
const googleregisterRouter = express.Router();

googleregisterRouter.post("/", setpassword);

module.exports = googleregisterRouter;
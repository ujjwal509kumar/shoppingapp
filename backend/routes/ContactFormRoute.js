const contactForm = require('../controllers/ContactForm');
const express = require("express");
const contactFormRouter = express.Router();

contactFormRouter.post("/", contactForm);

module.exports = contactFormRouter;

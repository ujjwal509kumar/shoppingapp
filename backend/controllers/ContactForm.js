const ContactForm = require('../Schema/ContactForm');
const nodemailer = require("nodemailer");

const contactForm = async (req, res) => {

    const newMessage = new ContactForm({
        name: req.body.Name,
        email: req.body.Email,
        message: req.body.Message,
    });

    await newMessage.save();

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ujjwal509kumar@gmail.com",
            pass: process.env.MAIL_PASSWORD,
        },
    });
    
    var mailOptions = {
        from: "Shop360",
        to: req.body.Email,
        subject: "Regarding your query",
        text: `Thank you for contacting us. We will get back to you soon.`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
    return res.status(201).json({ status: "Email Sent" });
};

module.exports = contactForm;
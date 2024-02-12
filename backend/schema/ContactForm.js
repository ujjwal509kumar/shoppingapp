const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your firstname'],
    },
    email: {
        type: String,
        required: [true, 'Enter your email'],
    },
    message: {
        type: String,
        required: [true,'Enter your message'],
    },
    
});

module.exports = mongoose.models.ContactForm || mongoose.model('ContactForm', contactFormSchema);
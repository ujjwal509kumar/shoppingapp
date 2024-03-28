const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true],
    },
    lastname: {
        type: String,
        required: [true],
    },
    email: {
        type: String,
        required: [true],
    },
    phone: {
        type: Number,
        required: true,
    },
    companyname: {
        type: String,
        required: [false],
    },
    address: {
        type: String,
        required: [true],
    },
    apartment:{
        type: String,
        required: [false],
    },
    city: {
        type: String,
        required: [true],
    },
    country: {
        type: String,
        required: [true],
    },
    state: {
        type: String,
        required: [true],
    },
    pincode: {
        type: Number,
        required: [true],
    },
    deliveryNotes: {
      type: String,
        required: [false],  
    },
    reciptid : {
        type: String,
        required : false,
    },
    paymentid : {
        type: String,
        required : false,
    },
    orderid : {
        type: String,
        required : false,
    },
    paymentstatus : {
        type: String,
        required : false,
    },
    originaluser : {
        type: String,
        required : false,
    },
});

module.exports = mongoose.models.Orders || mongoose.model('Orders', OrderSchema);
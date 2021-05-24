const mongoose = require("mongoose");

const product = new mongoose.Schema({
    name: {
        type: String,
    },
    quantity: {
        type: Number,
    },
});

const order = new mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: Number,
    },
    products: {
        type: [product],
    },
    merchant: {
        type: String,
    },
    date: {
        type: String,
    },
    notes: {
        type: String,
    },
});

module.exports = Order = mongoose.model("order", order);

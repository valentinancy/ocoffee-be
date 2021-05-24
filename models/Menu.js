const mongoose = require("mongoose");

const menu = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
});

module.exports = Menu = mongoose.model("menu", menu);

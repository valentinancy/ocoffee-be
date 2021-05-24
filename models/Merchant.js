const mongoose = require("mongoose");

const merchant = new mongoose.Schema({
    name: {
        type: String,
    },
});

module.exports = Merchant = mongoose.model("merchant", merchant);

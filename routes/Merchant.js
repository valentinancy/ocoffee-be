const express = require("express");
const Merchant = require("../models/Merchant");
const route = express.Router();

route.post("/", async (req, res) => {
    const { name } = req.body;
    let merchant = new Merchant({
        name,
    });
    await merchant.save();
    res.json(merchant);
});

route.get("/", async (req, res) => {
    Merchant.find()
        .exec()
        .then((merchantList) => res.status(200).json(merchantList))
        .catch((err) => res.status(500).json({ error: err }));
});

module.exports = route;

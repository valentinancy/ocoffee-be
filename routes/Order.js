const express = require("express");
const Order = require("../models/Order");
const route = express.Router();

route.post("/", async (req, res) => {
    const { name, phone, products, merchant, date, notes } = req.body;
    let order = new Order({
        name,
        phone,
        products,
        merchant,
        date,
        notes,
    });
    await order.save();
    res.json(order);
});

route.get("/", async (req, res) => {
    Order.find()
        .exec()
        .then((orderList) => res.status(200).json(orderList))
        .catch((err) => res.status(500).json({ error: err }));
});

module.exports = route;

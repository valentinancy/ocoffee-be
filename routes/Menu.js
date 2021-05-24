const express = require("express");
const Menu = require("../models/Menu");
const route = express.Router();

route.post("/", async (req, res) => {
    const { name, price, description, image } = req.body;
    let menu = new Menu({
        name,
        price,
        description,
        image,
    });
    await menu.save();
    res.json(menu);
});

route.get("/", async (req, res) => {
    Menu.find()
        .exec()
        .then((menuList) => res.status(200).json(menuList))
        .catch((err) => res.status(500).json({ error: err }));
});

module.exports = route;

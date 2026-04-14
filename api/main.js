const express = require("express");
const router = express.Router();

const favorites = require("./favorites");
const history = require("./history");
const wishlist = require("./wishlist");

router.get("/favorites", (req, res) => {
    res.json(favorites.getAll());
});

router.post("/favorites", (req, res) => {
    const item = favorites.add(req.body);
    if (!item) return res.status(400).json({ error: "name required" });
    res.status(201).json(item);
});

router.delete("/favorites/:id", (req, res) => {
    res.json(favorites.remove(req.params.id));
});

router.get("/history", (req, res) => {
    res.json(history.getAll());
});

router.get("/wishlist", (req, res) => {
    res.json(wishlist.getAll());
});

router.post("/wishlist", (req, res) => {
    const item = wishlist.add(req.body);
    if (!item) return res.status(400).json({ error: "name required" });
    res.status(201).json(item);
});

router.delete("/wishlist/:id", (req, res) => {
    res.json(wishlist.remove(req.params.id));
});

module.exports = router;
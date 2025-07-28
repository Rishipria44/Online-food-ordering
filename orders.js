const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).send("Order placed successfully!");
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

module.exports = router;
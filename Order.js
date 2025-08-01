const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: String,
    foodItem: String,
    quantity: Number,
    address: String
});

module.exports = mongoose.model('Order', orderSchema);
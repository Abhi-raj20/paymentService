const Payment = require('../models/paymentModel');
const axios = require("axios");

exports.createPayment = async (req, res) => {
    try {
        const { orderId, amount } = req.body;
        const payment = new Payment({ orderId, amount, status: "Completed" });
        await payment.save();

        // Update order status
        await axios.put(`${process.env.ORDER_SERVICE_URL}/${orderId}`, { status: "Paid" });

        res.status(201).json(payment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


exports.showPayment = async (req, res) => {
    const payment = await Payment.find();
    res.json(payment);
}
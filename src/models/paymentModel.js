const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    amount: Number,
    status: { type: String, default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model("Payment", PaymentSchema);
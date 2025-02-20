const express = require("express");
const connectDB = require("./src/config/db");
const paymentRoutes = require("./src/routes/paymentRoutes");
require("dotenv").config();

const app = express();
connectDB();
app.use(express.json());

app.use("/payments", paymentRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Payment Service running on port ${process.env.PORT}`);
});


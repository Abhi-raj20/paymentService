const express = require("express");
const {createPayment,showPayment} = require('../controllers/paymentController');


const router = express.Router();


router.post("/createPayment",createPayment );
router.post("/",showPayment );

module.exports = router;
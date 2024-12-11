const express = require('express');
const { createSalesRecord, getAllSalesRecords, getSalesByBusinessId } = require('../controllers/sales.controller');
const router = express.Router();

router.post('/', createSalesRecord); // Create sales record
router.get('/', getAllSalesRecords); // Get all sales records
router.get('/business/:businessId', getSalesByBusinessId); // Get sales by business ID

module.exports = router;

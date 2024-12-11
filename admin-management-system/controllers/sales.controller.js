const Sales  = require('../models/sales.model');

// Create a new sales record
exports.createSalesRecord = async (req, res) => {
    try {
        console.log(req.body);
        const sales = await Sales.create(req.body);
        res.status(200).json({
            timestamp:Date.now(),
            status:200,
            error: null,
            message: 'Sales Added',data:sales});
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

// Get all sales records
exports.getAllSalesRecords = async (req, res) => {
    try {
        const salesRecords = await Sales.findAll();
        res.status(200).json({
            timestamp:Date.now(),
            status:200,
            error: null,
            message: 'Sales Fetched',data:salesRecords});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get sales by business ID
exports.getSalesByBusinessId = async (req, res) => {
    try {
        const salesRecords = await Sales.findAll({ where: { business_id: req.params.businessId } });
        if (!salesRecords.length) return res.status(404).json({ error: 'No sales found for this business' });
        res.status(200).json(salesRecords);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

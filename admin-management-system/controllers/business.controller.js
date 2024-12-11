const Business = require('../models/business.model');

// Create a new business
exports.createBusiness = async (req, res) => {
    try {
        const business = await Business.create(req.body);
        res.status(201).json({
            timestamp:Date.now(),
            status:200,
            error: null,
            message: 'Business Added',data:business
        }
        );
    } catch (error) {
        res.status(400).json({
            error: error.message || 'Failed to create business',
        });
    }
};

// Get all businesses
exports.getAllBusinesses = async (req, res) => {
    try {
        // Fetch all businesses with all columns
        const businesses = await Business.findAll({
            attributes: [
                'business_id',
                'business_name',
                'business_email',
                'contact_number',
                'city',
                'created_time',
                'last_modified_time'
            ],
        });

        res.status(200).json({
            timestamp:Date.now(),
            status:200,
            error: null,
            message: 'Business List Fetched',data:businesses
        });
    } catch (error) {
        res.status(500).json({
            error: error.message || 'Failed to retrieve businesses',
        });
    }
};


// Get business by ID
exports.getBusinessById = async (req, res) => {
    try {
        const business = await Business.findByPk(req.params.id);
        if (!business) {
            return res.status(404).json({
                error: 'Business not found',
            });
        }
        res.status(200).json({
            timestamp:Date.now(),
            status:200,
            error: null,
            message: 'Business Fetched',data:business
        });
    } catch (error) {
        res.status(500).json({
            error: error.message || 'Failed to retrieve business',
        });
    }
};

// Update a business
exports.updateBusiness = async (req, res) => {
    try {
        const business = await Business.findByPk(req.params.id);
        if (!business) {
            return res.status(404).json({
                error: 'Business not found',
            });
        }
        await business.update(req.body);
        res.status(200).json({
            timestamp:Date.now(),
            status:200,
            error: null,
            message: 'Business Updated',data:business
        });
    } catch (error) {
        res.status(400).json({
            error: error.message || 'Failed to update business',
        });
    }
};

// Delete a business
exports.deleteBusiness = async (req, res) => {
    try {
        const business = await Business.findByPk(req.params.id);
        if (!business) {
            return res.status(404).json({
                error: 'Business not found',
            });
        }
        await business.destroy();
        res.status(200).json({
            message: 'Business deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            error: error.message || 'Failed to delete business',
        });
    }
};

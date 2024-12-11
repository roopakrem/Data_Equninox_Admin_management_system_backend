const express = require('express');
const { 
    createBusiness, 
    getAllBusinesses, 
    getBusinessById, 
    updateBusiness, 
    deleteBusiness 
} = require('../controllers/business.controller');
const router = express.Router();

router.post('/', createBusiness);          // Create business
router.get('/', getAllBusinesses);                // Get all businesses
router.get('/:id', getBusinessById);              // Get business by ID
router.put('/:id', updateBusiness);               // Update business
router.delete('/:id', deleteBusiness);            // Delete business

module.exports = router;

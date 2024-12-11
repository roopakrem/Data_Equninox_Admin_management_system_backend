const express = require('express');
const { createUser, getAllUsers, getUserById, updateUserById, loginUser } = require('../controllers/user.controller');
const router = express.Router();

router.post('/', createUser); // Create user
router.get('/', getAllUsers); // Get all users
router.get('/:id', getUserById); // Get user by ID
router.put('/:id', updateUserById);// Update User
router.post('/login', loginUser);


module.exports = router;

const  User  = require('../models/user.model');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
    
        res.status(200).json({
            timestamp:Date.now(),
            status:200,
            error: null,
            message: 'User Created',data:user
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) return res.status(404).json({ error: 'User not found' });
        let isValidPassword = false;
        if (user.password === req.body.password) isValidPassword = true;
        if (!isValidPassword) return res.status(401).json({ error: 'Invalid password' });
        res.status(200).json({
            message: 'Login successful',data:user
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            timestamp:Date.now(),
            status:200,
            error: null,
            message: 'Users Fetched',data:users
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json({
            timestamp:Date.now(),
            status:200,
            error: null,
            message: 'Users Fetched',data:user
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Update user by ID
exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({
                error: 'User not found',
            });
        }
        await user.update(req.body);
        res.status(200).json({
            timestamp:Date.now(),
            status:200,
            error: null,
            message: 'User Updated',data:user
        });
    } catch (error) {
        res.status(400).json({
            error: error.message || 'Failed to update user',
        });
    }
};

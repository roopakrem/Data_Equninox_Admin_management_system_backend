const { DataTypes } = require('sequelize');
const sequelize = require('../db.config');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    contact_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.JSON, // Matches the JSON data type in SQL
        allowNull: true, // Change to `false` if required
    },
    
    },{
        timestamps: true, // Enable Sequelize's timestamp handling
        createdAt: 'created_time', // Map createdAt to created_time
        updatedAt: 'last_modified_time', // Map updatedAt to last_modified_time
    }
);

module.exports = User;

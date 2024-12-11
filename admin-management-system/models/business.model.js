const { DataTypes } = require('sequelize');
const sequelize = require('../db.config');

const Business = sequelize.define('Business', {
    business_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    business_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    business_email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    contact_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true, // Enable Sequelize's timestamp handling
    createdAt: 'created_time', // Map createdAt to created_time
    updatedAt: 'last_modified_time', // Map updatedAt to last_modified_time
});

module.exports = Business;

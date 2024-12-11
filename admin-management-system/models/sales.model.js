const { DataTypes } = require('sequelize');
const sequelize = require('../db.config');

const Sales = sequelize.define('Sales', {
    sales_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    invoice_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    business_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
},{
    timestamps: true, // Enable Sequelize's timestamp handling
    createdAt: 'created_time', // Map createdAt to created_time
    updatedAt: 'last_modified_time', // Map updatedAt to last_modified_time
});

module.exports = Sales;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('admin_management_system', 'root', 'faith', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Disable SQL logging for cleaner output
});

module.exports = sequelize;

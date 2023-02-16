const { sequelize, DataTypes } = require('./db');

// TODO - define the Band model
const Band = sequelize.define('Band', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = {
    Band
};
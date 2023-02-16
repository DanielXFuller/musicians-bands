const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
const Band = sequelize.define('Band', {
    name: {
        type: Sequelize.toString,
        allowNull: false
    },
    genre: {
        type: Sequelize.toString,
        allowNull: false
    }
});

module.exports = {
    Band
};
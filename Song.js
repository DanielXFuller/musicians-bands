const {Sequelize, sequelize} = require('./db');

const Song = sequelize.define('Song', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = {
  Song,
};

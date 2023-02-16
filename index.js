const {Band} = require('./Band')
const {Musician} = require('./Musician')

Band.hasMany(Musician, { as: 'musicians'});
Musician.belongsTo(Band);

module.exports = {
    Band,
    Musician
};

const {Band} = require('./Band')
const {Musician} = require('./Musician')

Band.hasMany(Musician, { as: 'musicians'});
Musician.belongsTo(band);

module.exports = {
    Band,
    Musician
};

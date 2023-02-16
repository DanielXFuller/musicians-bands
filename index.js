const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song');

Band.hasMany(Musician, { as: 'musicians'});
Musician.belongsTo(Band);
Band.belongsToMany(Song, { through: 'BandSong' });
Song.belongsToMany(Band, { through: 'BandSong' });


module.exports = {
    Band,
    Musician,
    Song
};

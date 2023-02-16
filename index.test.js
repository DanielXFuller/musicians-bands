const {sequelize} = require('./db');
const {Band, Musician} = require('./index')
const {Song} = require('./models');

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const newBand = await Band.create({
            name: 'The Beatles',
            genre: 'Rock',
        });
        const foundBand = await Band.findOne({
            where: { name: 'The Beatles'},
        });
        expect(foundBand.name).toBe('The Beatles')
        expect(foundBand.genre).toBe('Rock');
    });

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const newMusician = await Musician.create({
            name: 'John Lennon',
            instrument: 'Guitar',
        });
        const foundMusician = await Musician.findOne({
            where: { name: 'John Lennon' },
        });
        expect(foundMusician.name).toBe('John Lennon');
        expect(foundMusician.instrument).toBe('Guitar');
    });

    test('can add multiple musicians to a band', async () => {
        const band = await Band.create({ name: 'The Beatles', genre: 'Rock' });

    // Create some musicians
        const musician1 = await Musician.create({ name: 'John Lennon', instrument: 'Guitar' });
        const musician2 = await Musician.create({ name: 'Paul McCartney', instrument: 'Bass' });
        const musician3 = await Musician.create({ name: 'George Harrison', instrument: 'Guitar' });
        const musician4 = await Musician.create({ name: 'Ringo Starr', instrument: 'Drums' });

        // Add the musicians to the band
        await band.addMusicians([musician1, musician2, musician3, musician4]);

        // Check that the musicians have been added correctly
        const musicians = await band.getMusicians();
        expect(musicians.length).toBe(4);
        expect(musicians[0].name).toBe('John Lennon');
        expect(musicians[1].name).toBe('Paul McCartney');
        expect(musicians[2].name).toBe('George Harrison');
        expect(musicians[3].name).toBe('Ringo Starr');
     
    });
});

describe('Song model', () => {
    beforeAll(async () => {
      await sequelize.sync({ force: true }); // re-create the database schema
    });
  
    test('should create a new Song with the correct properties', async () => {
      const song = await Song.create({ title: 'Bohemian Rhapsody', duration: 354 });
  
      expect(song.title).toBe('Bohemian Rhapsody');
      expect(song.duration).toBe(354);
    });

    test('should add songs to a band', async () => {
        // Create a band
        const band = await Band.create({ name: 'Queen', genre: 'Rock' });
    
        // Create some songs
        const song1 = await Song.create({ title: 'Bohemian Rhapsody', duration: 354 });
        const song2 = await Song.create({ title: 'We Will Rock You', duration: 122 });
        const song3 = await Song.create({ title: 'We Are the Champions', duration: 179 });
    
        // Add the songs to the band
        await band.addSongs([song1, song2, song3]);
    
        // Check that the songs have been added correctly
        const songs = await band.getSongs();
        expect(songs.length).toBe(3);
        expect(songs[0].title).toBe('Bohemian Rhapsody');
        expect(songs[1].title).toBe('We Will Rock You');
        expect(songs[2].title).toBe('We Are the Champions');
    });
});
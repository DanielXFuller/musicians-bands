const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

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
})
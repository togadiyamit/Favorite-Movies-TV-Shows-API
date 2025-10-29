import sequelize from '../config/database';
import Entry from '../models/entry.model';


async function seedData() {
    try {
        await sequelize.sync({ force: true });


        await Entry.bulkCreate([
            {
                title: 'Inception',
                type: 'Movie',
                director: 'Christopher Nolan',
                budget: 160000000,
                location: 'USA',
                duration: '2h 28m',
                year: 2010,
            },
            {
                title: 'Breaking Bad',
                type: 'TV Show',
                director: 'Vince Gilligan',
                budget: 3000000,
                location: 'USA',
                duration: '62 Episodes',
                year: 2008,
            },
            {
                title: 'Interstellar',
                type: 'Movie',
                director: 'Christopher Nolan',
                budget: 165000000,
                location: 'Iceland',
                duration: '2h 49m',
                year: 2014,
            },
            {
                title: 'Stranger Things',
                type: 'TV Show',
                director: 'Duffer Brothers',
                budget: 8000000,
                location: 'USA',
                duration: '34 Episodes',
                year: 2016,
            },
        ]);


        console.log('Seed data inserted successfully');
        process.exit(0);
    } catch (err) {
        console.error('Seeding failed', err);
        process.exit(1);
    }
}


seedData();
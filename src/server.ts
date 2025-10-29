import dotenv from 'dotenv';
import app from './app';
import sequelize from './config/database';


dotenv.config();


async function startServer() {
    try {
        await sequelize.authenticate();
        // sync models without forcing in normal run
        await sequelize.sync();


        console.log('Database connected successfully');


        const PORT = parseInt(process.env.PORT || '4000', 10);
        app.listen(PORT, function () {
            console.log('Server running on port ' + PORT);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}


startServer();
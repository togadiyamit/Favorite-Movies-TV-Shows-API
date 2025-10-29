import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();


const DB_NAME = process.env.DB_NAME || '';
const DB_USER = process.env.DB_USER || '';
const DB_PASS = process.env.DB_PASS || '';


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
host: process.env.DB_HOST || 'localhost',
dialect: (process.env.DB_DIALECT as any) || 'mysql',
logging: false,
});


export default sequelize;
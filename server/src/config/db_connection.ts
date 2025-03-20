import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize: Sequelize = new Sequelize(
    process.env.DB_NAME ?? "",
    process.env.DB_USER ?? "",
    process.env.DB_PASS ?? "",
    {
        host: process.env.DB_HOST ?? "",
        port: Number.parseInt(process.env.DB_PORT + ""),
        dialect: "mysql",
        // logging: true
    }
);
export default sequelize;
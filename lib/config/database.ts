// lib/config/database.ts
import { Sequelize } from "sequelize";
require('dotenv').config()

// export const database = new Sequelize(process.env.DB_URL);
export const database = new Sequelize(process.env.DB_URL, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });

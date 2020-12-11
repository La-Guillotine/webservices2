// lib/config/database.ts
import { Sequelize } from "sequelize";
require('dotenv').config()

export const database = new Sequelize(process.env.DB_URL);

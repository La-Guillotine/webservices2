// lib/config/database.ts
import { Sequelize } from "sequelize";
require('dotenv').config()

export const database = new Sequelize(`mysql://`+process.env.DB_USER+`@localhost:3306/`+process.env.DB+`?serverVersion=5.7`);
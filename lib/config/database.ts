// lib/config/database.ts
import { Sequelize } from "sequelize";
require('dotenv').config()

export const database = new Sequelize(`mysql://`+process.env.DATABASE_USER+`@localhost:3306/`+process.env.DATABASE+`?serverVersion=5.7`);
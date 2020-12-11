// lib/config/database.ts
import { Sequelize } from "sequelize";
require('dotenv').config()

export const database = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:3306/${process.env.DB_DATABASE}?serverVersion=5.7`);

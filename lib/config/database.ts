// lib/config/database.ts
import { Sequelize } from "sequelize";

export const database = new Sequelize(`mysql://root:root@localhost:3306/webservices?serverVersion=5.7`);
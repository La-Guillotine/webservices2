// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";


export class UserAnimal extends Model {}
UserAnimal.init({}, {
    sequelize: database,
    tableName: 'user_animal',
    timestamps: false
})
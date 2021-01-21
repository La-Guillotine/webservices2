// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";


export class UserVideogame extends Model {}
UserVideogame.init({}, {
    sequelize: database,
    tableName: 'user_videogame',
    timestamps: false
})
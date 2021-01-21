// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";


export class UserAnime extends Model {}
UserAnime.init({}, {
    sequelize: database,
    tableName: 'user_anime',
    timestamps: false
})
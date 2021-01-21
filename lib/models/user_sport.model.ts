// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";


export class UserSport extends Model {}
UserSport.init({}, {
    sequelize: database,
    tableName: 'user_sport',
    timestamps: false
})
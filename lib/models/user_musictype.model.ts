// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";


export class UserMusicType extends Model {}
UserMusicType.init({}, {
    sequelize: database,
    tableName: 'user_musictype',
    timestamps: false
})
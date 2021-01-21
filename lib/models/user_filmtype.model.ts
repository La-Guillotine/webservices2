// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";


export class UserFilmType extends Model {}
UserFilmType.init({}, {
    sequelize: database,
    tableName: 'user_filmtype',
    timestamps: false
})
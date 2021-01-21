// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";


export class UserFood extends Model {}
UserFood.init({}, {
    sequelize: database,
    tableName: 'user_food',
    timestamps: false
})
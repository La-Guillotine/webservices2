// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";


export class UserDrink extends Model {}
UserDrink.init({}, {
    sequelize: database,
    tableName: 'user_drink',
    timestamps: false
})
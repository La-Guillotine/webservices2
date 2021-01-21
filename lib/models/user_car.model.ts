// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";


export class UserCar extends Model {}
UserCar.init({}, {
    sequelize: database,
    tableName: 'user_car',
    timestamps: false
})
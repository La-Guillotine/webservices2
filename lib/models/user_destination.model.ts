// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";


export class UserDestination extends Model {}
UserDestination.init({}, {
    sequelize: database,
    tableName: 'user_destination',
    timestamps: false
})
// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class Destination extends Model {
    public id: number;
    public name: string;
}

Destination.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(100),
            allowNull: false,
        }
    },
    {
        tableName: "destination",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);
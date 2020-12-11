// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class Region extends Model {
    public id: number;
    public name: string;
}

Region.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        tableName: "region",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);
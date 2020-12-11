// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class City extends Model {
    public id: number;
    public name: string;
    public region_id: number;
}

City.init(
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
        region_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tableName: "city",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);
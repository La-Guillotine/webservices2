// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class AstrologicalSign extends Model {
    public id: number;
    public name: string;
}

AstrologicalSign.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        }
    },
    {
        tableName: "astrologicalsign",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);
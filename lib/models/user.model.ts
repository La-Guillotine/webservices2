// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class User extends Model {
    public id: number;
    public email: string;
    public password: string;
    public first_name: string;
    public last_name: string;
    public tel_number: string;
    public age: number;
    public address: string;
    public createdAt: Date;
    public updatedAt: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        first_name: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        last_name: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        tel_number: {
            type: new DataTypes.STRING(10),
            allowNull: true,
        },
        age: {
            type: new DataTypes.INTEGER,
            allowNull: false,
        },
        address: {
            type: new DataTypes.STRING(255),
            allowNull: true,
        },
    },
    {
        tableName: "user",
        sequelize: database, // this bit is important,
        timestamps: true
    }
);
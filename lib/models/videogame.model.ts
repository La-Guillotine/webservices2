// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";

export class Videogame extends Model {
    public id: number;
    public name: string;
}

Videogame.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        tableName: "videogame",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

Videogame.belongsToMany(User, {
    as : "users",
    foreignKey: "user_id",
    through: "user_videogame",
    timestamps: false
});
User.belongsToMany(Videogame, {
    as: "videogames",
    foreignKey: "videogame_id",
    through: "user_videogame",
    timestamps: false
});
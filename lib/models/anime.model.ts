// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";

export class Anime extends Model {
    public id: number;
    public name: string;
}

Anime.init(
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
        tableName: "anime",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

Anime.belongsToMany(User, {
    as : "users",
    foreignKey: "anime_id",
    through: "user_anime",
    timestamps: false
});
User.belongsToMany(Anime, {
    as: "animes",
    foreignKey: "user_id",
    through: "user_anime",
    timestamps: false
});
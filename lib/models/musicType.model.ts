// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";
import { UserMusicType } from "./user_musictype.model";

export class MusicType extends Model {
    public id: number;
    public name: string;
}

MusicType.init(
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
        tableName: "musictype",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

MusicType.belongsToMany(User, {
    as : "users",
    foreignKey: "musictype_id",
    through: UserMusicType,
    timestamps: false
});
User.belongsToMany(MusicType, {
    as: "musictypes",
    foreignKey: "user_id",
    through: UserMusicType,
    timestamps: false
});
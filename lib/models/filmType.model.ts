// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";

export class FilmType extends Model {
    public id: number;
    public name: string;
}

FilmType.init(
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
        tableName: "filmtype",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

FilmType.belongsToMany(User, {
    as : "users",
    foreignKey: "filmtype_id",
    through: "user_filmtype",
    timestamps: false
});
User.belongsToMany(FilmType, {
    as: "filmtypes",
    foreignKey: "user_id",
    through: "user_filmtype",
    timestamps: false
});
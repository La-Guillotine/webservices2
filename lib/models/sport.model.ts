// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";

export class Sport extends Model {
    public id: number;
    public name: string;
    public isTeamPlay: boolean
}

Sport.init(
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
        isTeamPlay: {
            type: new DataTypes.TINYINT,
            allowNull: false,
        }
    },
    {
        tableName: "sport",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

Sport.belongsToMany(User, {
    as : "users",
    foreignKey: "user_id",
    through: "user_sport",
    timestamps: false
});
User.belongsToMany(Sport, {
    as: "sports",
    foreignKey: "sport_id",
    through: "user_sport",
    timestamps: false
});
// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";

export class Food extends Model {
    public id: number;
    public name: string;
}

Food.init(
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
        tableName: "food",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

Food.belongsToMany(User, {
    as : "users",
    foreignKey: "user_id",
    through: "user_food",
    timestamps: false
});
User.belongsToMany(Food, {
    as: "foods",
    foreignKey: "food_id",
    through: "user_food",
    timestamps: false
});
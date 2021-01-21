// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";
import { UserFood } from "./user_food.model";

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
    foreignKey: "food_id",
    through: UserFood,
    timestamps: false
});
User.belongsToMany(Food, {
    as: "foods",
    foreignKey: "user_id",
    through: UserFood,
    timestamps: false
});
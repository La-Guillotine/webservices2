// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions, TinyIntegerDataType } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";

export class Drink extends Model {
    public id: number;
    public name: string;
    public isAlcoholised: boolean;
}

Drink.init(
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
        isAlcoholised: {
            type: new DataTypes.TINYINT,
            allowNull  : false,
        }
    },
    {
        tableName: "drink",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

Drink.belongsToMany(User, {
    as : "users",
    foreignKey: "user_id",
    through: "user_drink",
    timestamps: false
});
User.belongsToMany(Drink, {
    as: "drinks",
    foreignKey: "drink_id",
    through: "user_drink",
    timestamps: false
});
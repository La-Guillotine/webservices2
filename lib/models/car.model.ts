// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";
import { UserCar } from "./user_car.model";

export class Car extends Model {
    public id: number;
    public name: string;
    public brand: string;
}

Car.init(
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
        brand: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        tableName: "car",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

Car.belongsToMany(User, {
    as : "users",
    foreignKey: "car_id",
    through: UserCar,
    timestamps: false
});
User.belongsToMany(Car, {
    as: "cars",
    foreignKey: "user_id",
    through: UserCar,
    timestamps: false
});
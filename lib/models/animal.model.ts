// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";

export class Animal extends Model {
    public id: number;
    public name: string;
}

Animal.init(
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
        tableName: "animal",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

Animal.belongsToMany(User, {
    as : "users",
    foreignKey: "animal_id",
    through: "user_animal",
    timestamps: false
});
User.belongsToMany(Animal, {
    as: "animals",
    foreignKey: "user_id",
    through: "user_animal",
    timestamps: false
});
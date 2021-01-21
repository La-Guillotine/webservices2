// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";

export class Destination extends Model {
    public id: number;
    public name: string;
}

Destination.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(100),
            allowNull: false,
        }
    },
    {
        tableName: "destination",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

Destination.belongsToMany(User, {
    as : "users",
    foreignKey: "destination_id",
    through: "user_destination",
    timestamps: false
});
User.belongsToMany(Destination, {
    as: "destinations",
    foreignKey: "user_id",
    through: "user_destination",
    timestamps: false
});
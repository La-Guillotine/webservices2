// lib/models/node.model.ts
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./user.model";

export class AstrologicalSign extends Model {
    public id: number;
    public name: string;
}

AstrologicalSign.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        }
    },
    {
        tableName: "astrologicalsign",
        sequelize: database, // this bit is important,
        timestamps: false
    }
);

AstrologicalSign.hasMany(User, {
    as : "users",
    foreignKey: "astrologicalsign_id",
    sourceKey: "id"
});
User.belongsTo(AstrologicalSign, {
    as: "astrologicalsign",
    foreignKey: "astrologicalsign_id",
    targetKey: "id"
});
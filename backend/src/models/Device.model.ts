import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db_connection";

interface DeviceModelAttributes {
    id?: number;
    // userAgent: string;
    primaryHardwareType: string;
    osVersion: string;
    vendor: string;
    browserName: string;
    model: string;
    osName: string;
    browserRenderingEngine: string;
    createdAt?: Date;
    updatedAt?: Date;
}

class DeviceModel extends Model<DeviceModelAttributes> implements DeviceModelAttributes {
    public id!: number;
    // public userAgent!: string;
    public primaryHardwareType!: string;
    public osVersion!: string;
    public vendor!: string;
    public browserName!: string;
    public model!: string;
    public osName!: string;
    public browserRenderingEngine!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

DeviceModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // userAgent: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        primaryHardwareType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        osVersion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vendor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        browserName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        osName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        browserRenderingEngine: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "DeviceModel",
        tableName: "devices",
        timestamps: true,
    }
);

export default DeviceModel;

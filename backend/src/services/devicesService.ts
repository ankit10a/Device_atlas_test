import DeviceModel from "../models/Device.model";
import { Sequelize } from "sequelize";

class DeviceServices {

    private static _instance: DeviceServices;

    public static getInstance(): DeviceServices {
        if (!DeviceServices._instance) {
            DeviceServices._instance = new DeviceServices()
        }
        return DeviceServices._instance;
    }

    public async getDevice({ whereClause, orderClause }: { whereClause: any; orderClause: any }) {
        return await DeviceModel.findAll({
            where: whereClause,
            order: orderClause
        });
    }

    public async saveDeviceDetails(param: any) {
        return await DeviceModel.create(param)
    }

    public async getColumnAttributes() {
        // return await DeviceModel.getAttributes();
        return await DeviceModel.findOne({
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
    }

    public async getColumnDistinctValue(columnName: string) {
        return await DeviceModel.findAll({
            attributes: [[Sequelize.fn('DISTINCT', Sequelize.col(columnName)), columnName]]
            , raw: true
        })
    }
}

export default DeviceServices.getInstance();
import DeviceModel from "../models/Device.model";

class DeviceServices {

    private static _instance: DeviceServices;

    public static getInstance(): DeviceServices {
        if (!DeviceServices._instance) {
            DeviceServices._instance = new DeviceServices()
        }
        return DeviceServices._instance;
    }

    public async getDevice() {
        return await DeviceModel.findAll();
    }

    public async saveDeviceDetails(param: any) {
        return await DeviceModel.create(param)
    }
}

export default DeviceServices.getInstance();
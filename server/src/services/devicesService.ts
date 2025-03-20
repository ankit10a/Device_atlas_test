
class DeviceServices {

    private static _instance: DeviceServices;

    public static getInstance(): DeviceServices {
        if (!DeviceServices._instance) {
            DeviceServices._instance = new DeviceServices()
        }
        return DeviceServices._instance;
    }

    public async getDevice() {

    }

    public async saveDeviceDetails() {

    }
}

export default DeviceServices.getInstance();
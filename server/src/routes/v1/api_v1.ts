import { Router } from "express";
import { getAttributesData, getDeviceAttributes, getDevicesList, saveInfoNewDevice } from "../../controller/devicesController";

const V1_router = Router();

V1_router.get('/device-list', getDevicesList)
V1_router.post('/save-device-info', saveInfoNewDevice)
V1_router.get('/get-device-attributes', getDeviceAttributes);
V1_router.get('/get-device-column-data', getAttributesData)

export default V1_router;
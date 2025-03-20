import { Router } from "express";
import { getDevicesList, saveInfoNewDevice } from "../../controller/devicesController";

const V1_router = Router();

V1_router.get('/device-list', getDevicesList)
V1_router.post('/save-device-info', saveInfoNewDevice)

export default V1_router;
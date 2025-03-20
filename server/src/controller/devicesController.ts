import { Request, Response } from "express";
import devicesService from "../services/devicesService";
import { checkProperties } from "../utils/validation";

export const getDevicesList = async (req: Request, res: Response): Promise<Response> => {
    try {
        const list = await devicesService.getDevice();
        return res.status(200).json({ message: 'success', list }) // Fixed typo in 'successs'

    } catch (error) {
        return res.status(400).json({ message: "Some Internal Error Occurs" })
    }
}

export const saveInfoNewDevice = async (req: Request, res: Response): Promise<Response> => {
    const body = req.body;
    if (!body || !body.properties) {
        return res.status(400).send({ message: "Parameter is missing" })
    }
    try {
        checkProperties(body.properties)
        const saveInfo = await devicesService.saveDeviceDetails(body.properties)
        return res.status(201).send({ message: 'Information Saved', saveInfo })
    } catch (error) {
        console.error(`Error in the saveInfoNewDevice Controller ${error}`)
        return res.status(500).send({ message: 'Some internal Error' })
    }
}
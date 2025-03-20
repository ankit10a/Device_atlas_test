import { Request, Response } from "express";
import devicesService from "../services/devicesService";
import { ValidationError } from "sequelize";

export const getDevicesList = async (req: Request, res: Response): Promise<Response> => {
    try {
        const list = await devicesService.getDevice();
        return res.status(200).json({ message: 'success', list })

    } catch (error) {
        return res.status(400).json({ message: "Some Internal Error Occurs" })
    }
}

export const saveInfoNewDevice = async (req: Request, res: Response): Promise<Response> => {
    const { properties } = req.body as { properties?: Record<string, unknown> }; // Ensures properties exist

    if (!properties || Object.keys(properties).length == 0) {
        return res.status(400).json({ message: "Missing required parameters: properties" });
    }
    try {
        const saveInfo = await devicesService.saveDeviceDetails(properties)
        return res.status(201).send({ message: 'Information Saved', saveInfo })
    } catch (error) {
        console.error(`Error in the saveInfoNewDevice Controller ${error}`)
        if (error instanceof ValidationError) {
            // Extract field-specific errors
            const validationErrors = error.errors.map(err => ({
                field: err.path,
                message: err.message.split('.')[1]
            }));

            return res.status(400).json({
                message: "Validation failed",
                errors: validationErrors
            });
        }

        return res.status(500).json({ message: "Internal Server Error" });
        // return res.status(500).send({ message: 'Some internal Error', error: (error as Error).message })
    }
}
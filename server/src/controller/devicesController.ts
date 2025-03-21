import { Request, Response } from "express";
import devicesService from "../services/devicesService";
import { Order, ValidationError, WhereOptions } from "sequelize";

export const getDevicesList = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { sortBy, orderBy, filterColumn, filterValue } = req.query;

        const whereClause: WhereOptions = {};
        if (filterColumn && filterValue) {
            whereClause[filterColumn as string] = filterValue;
        }

        const orderClause: Order = [];
        if (sortBy) {
            orderClause.push([sortBy as string, orderBy?.toString() || 'ASC']);
        }
        const list = await devicesService.getDevice({ whereClause, orderClause });
        return res.status(200).json({ message: 'success', list })

    } catch (error) {
        return res.status(400).json({ message: "Some Internal Error Occurs" })
    }
}

export const getDeviceAttributes = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await devicesService.getColumnAttributes();
        const columnData = Object.keys(result?.toJSON?.() || {})
        return res.status(200).json({ columnData })
    } catch (error) {
        console.error(`Error in the getDeviceColumn Controller ${error}`);
        return res.status(500).send({ message: "Internal Server Error" })
    }
}

export const getAttributesData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const columnName: any = req.query.params;
        const result = (await devicesService.getColumnDistinctValue(columnName)).map((ele: any) => ele[columnName])
        return res.status(200).json({ result })
    } catch (error) {
        console.error(`Error in the getAttributesData Controller ${error}`);
        return res.status(500).send({ message: "Internal Server Error" })
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
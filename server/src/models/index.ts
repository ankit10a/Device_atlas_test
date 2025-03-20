import { Sequelize, ModelStatic } from 'sequelize';
import sequelize from '../config/db_connection';
import Device from './device.model';

// Define model interface with initialization capability
interface InitializableModel {
    initialize?: (sequelize: Sequelize) => void;
    associate?: (models: Record<string, ModelStatic<any>>) => void;
}

// Strongly typed models registry
const models: Record<string, ModelStatic<any> & InitializableModel> = {
    Device
};

export type Models = typeof models;

/**
 * Initialize database models and associations
 * @param sequelize - Sequelize instance
 * @returns Initialized models registry
 */
export const initModels = (sequelize: Sequelize): Models => {
    try {
        // Initialize models
        Object.entries(models).forEach(([modelName, model]) => {
            if (model.initialize && typeof model.initialize === 'function') {
                console.log(`Initializing model: ${modelName}`);
                model.initialize(sequelize);
            }
        });

        // Setup associations after all models are initialized
        Object.values(models).forEach(model => {
            if (model.associate && typeof model.associate === 'function') {
                console.log(`Setting up associations for: ${model.name}`);
                model.associate(models);
            }
        });

        return models;
    } catch (error) {
        console.error('Model initialization failed:', error);
        throw new Error('Failed to initialize database models');
    }
};

/**
 * Database initialization sequence
 */
export const dbInitialize = async (): Promise<void> => {
    try {
        // Test database connection
        await sequelize.authenticate();
        console.log('Database connection established successfully');

        // Initialize models and associations
        initModels(sequelize);
        if (process.env.DB_SYNC == 'SYNC') {
            // Sync database schema
            await sequelize.sync({ alter: true });
            console.log('Database schema synchronized');
        }

    } catch (error) {
        console.error('Database initialization failed:', error);
        throw new Error('Failed to initialize database connection');
    }
};
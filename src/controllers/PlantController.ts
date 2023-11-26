import { NextFunction, Request, Response } from 'express';
import Plant from '../models/Plant';

const PlantController = {
    async getPlants(req: Request, res: Response, next: NextFunction) {
        try {
            const plants = await Plant.findAll()
            return res.status(200).json(plants);
        } catch (error) {
            next(error)
        }
    },
}
export default PlantController;
import { request, Request, Response } from 'express';

import db from '../database'

class CarsController {

    public async list (req: Request, res: Response) {
        const cars = await db.query('SELECT * FROM Vehicles');
        res.json(cars);
    }

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO Vehicles set ?', [req.body]);
        res.json({message: 'Car Saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM Vehicles WHERE id = ?', [ id ])
        res.json({message: 'The car was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE Vehicles set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The car was updated'})
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const cars = await db.query('SELECT * FROM Vehicles WHERE id = ?', [ id ]);
        if (cars.length > 0) {
            return res.json(cars[0]);
        }
        res.status(404).json({text: 'The car doesnt exists'});
        console.log(cars);
        res.json({message: 'Get cars'})
    }

}

export const carsController = new CarsController();
import { Router } from 'express';

import { carsController } from '../controllers/cars.controller'

class CarsRoutes  {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', carsController.list);
        this.router.get('/:id', carsController.getOne);
        this.router.post('/', carsController.create); 
        this.router.delete('/:id', carsController.delete);
        this.router.put('/:id', carsController.update);
    }
}

const carsRoute = new CarsRoutes();
export default carsRoute.router;
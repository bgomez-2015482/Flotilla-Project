"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cars_controller_1 = require("../controllers/cars.controller");
class CarsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cars_controller_1.carsController.list);
        this.router.get('/:id', cars_controller_1.carsController.getOne);
        this.router.post('/', cars_controller_1.carsController.create);
        this.router.delete('/:id', cars_controller_1.carsController.delete);
        this.router.put('/:id', cars_controller_1.carsController.update);
    }
}
const carsRoute = new CarsRoutes();
exports.default = carsRoute.router;

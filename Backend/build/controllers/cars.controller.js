"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsController = void 0;
const database_1 = __importDefault(require("../database"));
class CarsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cars = yield database_1.default.query('SELECT * FROM Vehicles');
            res.json(cars);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Vehicles set ?', [req.body]);
            res.json({ message: 'Car Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Vehicles WHERE id = ?', [id]);
            res.json({ message: 'The car was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE Vehicles set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The car was updated' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cars = yield database_1.default.query('SELECT * FROM Vehicles WHERE id = ?', [id]);
            if (cars.length > 0) {
                return res.json(cars[0]);
            }
            res.status(404).json({ text: 'The car doesnt exists' });
            console.log(cars);
            res.json({ message: 'Get cars' });
        });
    }
}
exports.carsController = new CarsController();

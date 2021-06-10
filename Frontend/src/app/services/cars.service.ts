import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Car } from "../models/car";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get(`${this.API_URI}/cars`)
  }

  getCar(id: string) {
    return this.http.get(`${this.API_URI}/cars/ ${id}`);
  }

  saveCar(car: Car) {
    return this.http.post(`${this.API_URI}/cars`, car);
  }

  deleteCar(id: string) {
    return this.http.delete(`${this.API_URI}/cars/ ${id}`)
  }

  updateCar(id: string|number|undefined, updatedCar: Car): Observable<Car> {
    return this.http.put(`${this.API_URI}/cars/ ${id}`, updatedCar);
  }

}

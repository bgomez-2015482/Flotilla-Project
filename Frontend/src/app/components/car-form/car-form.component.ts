import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Router, ActivatedRoute } from "@angular/router";

import { CarsService } from "../../services/cars.service";
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  car: Car = {
    id: 0,
    brand: '',
    status: '',
    model: '',
    year_: 0,
    license: '',
    image: '',
    created_at: new Date()
  }

  edit: boolean = false;

  constructor(private carsService: CarsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.carsService.getCar(params.id).subscribe(
        res => {
          console.log(res);
          this.car = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  onSubmit() {
    delete this.car.created_at;
    delete this.car.id;
    
    this.carsService.saveCar(this.car).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/');
      },
      err => console.log(err)
    )
  }

  updateCar() {
    delete this.car.created_at;
    this.carsService.updateCar(this.car.id, this.car).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/');
      },
      err => console.log(err)
    )
  }

}

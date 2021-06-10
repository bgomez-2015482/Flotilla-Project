import { Component, HostBinding, OnInit } from '@angular/core';
import { CarsService } from "../../services/cars.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  cars: any = [];

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe(
      res => {
        this.cars = res;
      },
      err => console.error(err)
    )
  }

  deleteCar(id: string) {
    this.carService.deleteCar(id).subscribe(
      res => {
        console.log(res)
        this.getCars();
      },
      err => console.log(err)
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cars: any;
  thereIsaCar: boolean = false;

  constructor(private carService: RestService, private router: Router) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((res) => {
      if(res.data && res.data.length == 0) {
        this.cars = [];
        this.thereIsaCar = true;

        return;
      }

      this.thereIsaCar = false;
      this.cars = res.data;
    });
  }

  update(carro: any) {
    this.router.navigate([`/update/${JSON.stringify(carro)}`]);
  }

  remove(placa: any) {
    this.carService.deleteCar(placa).subscribe((res) => {
      this.carService.getCars().subscribe((res) => {
        if(res.data.length == 0) {
          this.cars = [];
          this.thereIsaCar = true;

          return;
        }

        this.thereIsaCar = false;
        this.cars = res.data;
      });
    });
  }
}

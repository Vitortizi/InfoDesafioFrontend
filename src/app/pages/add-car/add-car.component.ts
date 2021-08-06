import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  data: any;

  placa: any;
  chassi: any;
  renavam: any;
  modelo: any;
  marca: any;
  ano: any;

  constructor(private router: Router, private carService: RestService) { }

  ngOnInit(): void {
  }

  addCar() {
    this.data = {
      "placa": this.placa,
      "chassi": this.chassi,
      "renavam": this.renavam, 
      "modelo": this.modelo, 
      "marca": this.marca,
      "ano": this.ano,      
    };

    this.carService.createCar(this.data).subscribe((res) => {
      if (res.success) {
        alert(res.msg);
        this.router.navigate([`/home`]);
        return;
      }

      alert(res.Error);
    });
  }
}

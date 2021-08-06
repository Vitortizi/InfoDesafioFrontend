import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent implements OnInit {

  data: any;
  dataUpdate: any;

  placa: any;
  chassi: any;
  renavam: any;
  modelo: any;
  marca: any;
  ano: any;

  constructor(private route: ActivatedRoute, private router: Router, private carService: RestService) { }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.data = JSON.parse(res.placa);

      this.placa = this.data.placa;
      this.chassi = this.data.chassi;
      this.renavam = this.data.renavam;
      this.modelo = this.data.modelo;
      this.marca = this.data.marca;
      this.ano = this.data.ano;
    });
  }

  updateCar() {
    this.dataUpdate = {
      "placa": this.placa,
      "chassi": this.chassi,
      "renavam": this.renavam, 
      "modelo": this.modelo, 
      "marca": this.marca,
      "ano": this.ano,      
    };

    this.carService.updateCar(this.data.placa, this.dataUpdate).subscribe((res) => {
      if (res.success) {
        alert(res.msg);
        this.router.navigate([`/home`]);
        return;
      }

      alert(res.Error);
    });
  }
}

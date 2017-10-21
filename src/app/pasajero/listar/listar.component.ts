import { Component, OnInit } from '@angular/core';
import { PasajeroService } from '../pasajero.service';
import { Pasajero } from '../pasajero';
import{PasajeroDataService} from '../pasajero-data.service';

@Component({
  selector: 'app-listar-pasajero',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(
    //private pasajeroService:PasajeroService
    private pasajerodata:PasajeroDataService
  ) { }

  ngOnInit() {
    this.pasajerodata.CargarPasajero();
  }

}

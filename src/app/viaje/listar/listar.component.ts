import { Component, OnInit } from '@angular/core';
import { ViajeService } from '../viaje.service';
import { Viaje } from '../viaje';
import {ViajeDataService} from '../viaje-data.service';

@Component({
  selector: 'app-listar-viaje',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(
    //private viajeService:Viaje
    private viajedata:ViajeDataService
  ) { }

  ngOnInit() {
    this.viajedata.CargarViaje();
  }

  

}

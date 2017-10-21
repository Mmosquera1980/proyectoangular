import { Component, OnInit } from '@angular/core';
import { TiqueteService } from '../tiquete.service';
import { ChivaService } from '../../chiva/chiva.service';
import { PasajeroService } from '../../pasajero/pasajero.service';
import { ViajeService } from '../../viaje/viaje.service';
import { Tiquete } from '../tiquete';

import {TiqueteDataService}from '../tiquete-data.service'
import{PasajeroDataService} from '../../pasajero/pasajero-data.service';
import {ViajeDataService} from '../../viaje/viaje-data.service';
import{ChivaDataService} from '../../chiva/chiva-data.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  tiquete:Tiquete;
  constructor(private tiquetedata:TiqueteDataService, private chivadata:ChivaDataService,
              private pasajerodata:PasajeroDataService, private viajedata:ViajeDataService) { }

  ngOnInit() {
    this.tiquete = new Tiquete();
    this.chivadata.CargarChivas()
    this.pasajerodata.CargarPasajero()
    this.viajedata.CargarViaje()
    
  }
  onNewClick(){
    alert("Nuevo Ingreso");
    this.tiquete=new Tiquete();
  }

  onSaveClick(){
    alert("Se ha guardado " + this.tiquete.codigo);
    this.tiquetedata.GuardarTiquete(this.tiquete);
  }

}

import { Component, OnInit } from '@angular/core';
import { Viaje } from '../viaje';
import { ViajeService } from '../viaje.service';
import {ViajeDataService} from '../viaje-data.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  viaje:Viaje;
  
  ciudadesList = [
    { value:1, label:"Manizales" },
    { value:2, label:"Pereira" },
    { value:3, label:"Armenia" },
    { value:4, label:"Chinchina" },
    { value:5, label:"Dos Quebradas" },
    { value:6, label:"Quimbaya" },
  ];

  constructor(
  //private viajeService:ViajeService
  private viajedata:ViajeDataService
  ) { }

  ngOnInit() {
    this.viaje = new Viaje();
  }

  onNewClick(){
    alert("Nuevo Ingreso");
    this.viaje=new Viaje();
  }

  onSaveClick(){
    alert("Se ha guardado " + this.viaje.nombre); 
    this.viajedata.GuardarViaje(this.viaje);
  }

}

import { Injectable } from '@angular/core';
import { Pasajero } from './pasajero';

@Injectable()
export class PasajeroService { 

  pasajerosList:Array<Pasajero>;

  constructor() {
    this.pasajerosList=[
      {cedula: "30334240",
      nombre: "Andres Aristizabal",
      telefono:3188341318,
      edad:15},
      {cedula: "75096164",
      nombre: "Mauricio Mosquera",
      telefono:3147040522,
      edad:18}]
   }
 
}
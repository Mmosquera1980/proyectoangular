import { Injectable } from '@angular/core';
import { Viaje } from './viaje';

@Injectable()
export class ViajeService {

  viajesList:Array<Viaje>;
  
    constructor() {
      this.viajesList=[
        {codigo:101,
        nombre: "Man-Arm",
        linicio: "Manizales",
        lfin: "Armenia"},
        {codigo:102,
        nombre: "Arm-Man",
        linicio: "Armenia",
        lfin: "Manizales"}]
     }

}

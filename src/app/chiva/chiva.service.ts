import { Injectable } from '@angular/core';
import { Chiva } from './chiva';

@Injectable()
export class ChivaService {

  chivasList:Array<Chiva>;

  constructor() {
    this.chivasList=[
      {nombre: "La Cariñosa",
      placa: "NAH834",
      numpuestos:"34",
      combustible:"Gasolina",
      modelo: "1961"},
      {nombre: "Gustosa",
      placa: "NTZ234",
      numpuestos:"50",
      combustible:"ACPM",
      modelo: "1960"}]
   }

}

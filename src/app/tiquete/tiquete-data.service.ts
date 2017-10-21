import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tiquete } from './tiquete';

@Injectable()
export class TiqueteDataService {

  tiquetesList:Array<Tiquete>  
  
   constructor(
     public http:HttpClient
   ) { }
 
  CargarTiquete(){
  this.http.get("http://localhost:18171/tiquete/GetAllTiquetes")
   .subscribe(data =>{
     this.tiquetesList = data as Array<Tiquete>; 
   });
  }
 
  GuardarTiquete(newTiquete:Tiquete){
  this.http.post("http://localhost:18171/tiquete/SaveTiquete",
  {
    
     "codigo":` ${newTiquete.codigo}` ,
    "pasajero": ` ${newTiquete.pasajero}`,
    "chiva": ` ${newTiquete.chiva}`,
    "viaje":` ${newTiquete.viaje}`
    
 })
 .subscribe(data => {
 this.CargarTiquete();
 });
 }

}

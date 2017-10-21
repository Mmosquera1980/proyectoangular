import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viaje } from './viaje';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ViajeDataService{

  viajesList:Array<Viaje>  
  
  constructor(
    public http:HttpClient
  ) { }

 CargarViaje(){
 this.http.get("http://localhost:18171/viaje/GetAllViajes")
  .subscribe(data =>{
    this.viajesList = data as Array<Viaje>; 
  });
 }

 GuardarViaje(newViaje:Viaje){
 this.http.post("http://localhost:18171/viaje/SaveViaje",
 {
   
   "codigo":` ${newViaje.codigo}` ,
   "nombre": ` ${newViaje.nombre}`,
   "inicio": ` ${newViaje.linicio}`,
   "final":` ${newViaje.lfin}`
   
})
.subscribe(data => {
 this.CargarViaje()
console.log("bueno") 
});
}


}
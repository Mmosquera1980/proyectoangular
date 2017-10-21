import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pasajero } from './pasajero';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PasajeroDataService {
  newPasajero:any
  pasajerosList:Array<Pasajero>  
  headers:Headers;
  headersPost:Headers;
  options:RequestOptions;
  constructor(
    public http:HttpClient
  ) { }

 CargarPasajero(){
 this.http.get("http://localhost:18171/pasajero/GetAllPasajeros")
  .subscribe(data =>{
    this.pasajerosList = data as Array<Pasajero>; 
  });
 }

 GuardarChiva(newPasajero:Pasajero){
 this.http.post("http://localhost:18171/pasajero/SavePasajero",
 {
   
    "cedula":` ${newPasajero.cedula}` ,
   "nombre": ` ${newPasajero.nombre}`,
   "telefono": ` ${newPasajero.telefono}`,
   "edad":` ${newPasajero.edad}`
   
})
.subscribe(data => {
this.CargarPasajero();
});
}


}



  
  



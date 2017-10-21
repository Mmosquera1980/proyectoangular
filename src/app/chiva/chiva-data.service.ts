
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chiva } from './chiva';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ChivaDataService {
  

  chivasList:Array<Chiva>  

  
  constructor(
    public http:HttpClient
  ) { }

  CargarChivas(){
    this.http.get("http://localhost:18171/chiva/GetAllChivas")
    .subscribe(data =>{
      this.chivasList = data as Array<Chiva>; 
    });
  }

  GuardarChiva(newChiva:Chiva){
 
    
    //console.log((queryString));

    this.http.post("http://localhost:18171/chiva/SaveChiva",
      {
        
         "nombre":` ${newChiva.nombre}` ,
        "placa": ` ${newChiva.placa}`,
        "puestos": ` ${newChiva.numpuestos}`,
        "combustible":` ${newChiva.combustible}`,
        "modelo": ` ${newChiva.nombre}`
    })
    .subscribe(data => {
     this.CargarChivas()
    });
  }
  
}
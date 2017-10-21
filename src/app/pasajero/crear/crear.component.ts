import { Component, OnInit } from '@angular/core';
import { Pasajero } from '../pasajero';
import { PasajeroService } from '../pasajero.service';
import{PasajeroDataService} from '../pasajero-data.service';

@Component({
  selector: 'app-crear-pasajero',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  pasajero:Pasajero;

  constructor(
    //private pasajeroService:PasajeroService
    private pasajerodata:PasajeroDataService
 
  ) { }
  
    ngOnInit() {
      this.pasajero = new Pasajero();
    }
  
    onNewClick(){
      alert("Nuevo Ingreso");
      this.pasajero=new Pasajero();
    }
  
    onSaveClick(){
      alert("Se ha guardado " + this.pasajero.nombre); 
      this.pasajerodata.GuardarChiva(this.pasajero);
    }

}

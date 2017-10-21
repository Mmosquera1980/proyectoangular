import { Component, OnInit } from '@angular/core';
import { Chiva } from '../chiva';
import { ChivaService } from '../chiva.service';
import {ChivaDataService} from '../chiva-data.service';


@Component({
  selector: 'app-crear-chiva',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  
})
export class CrearComponent implements OnInit {

  chiva:Chiva;

  combustibleList = [
    { value:1, label:"Gasolina" },
    { value:2, label:"Gas" },
    { value:3, label:"ACPM" },
    
  ];

  modeloList = [ 
    { value:1, label:"2000" },
    { value:2, label:"2001" },
    { value:3, label:"2002" },
    { value:4, label:"2003" },
  ];

  constructor(
    //private chivaService:ChivaService
    private chivaData:ChivaDataService
  ) { }

  ngOnInit() {
    this.chiva = new Chiva();
    
  }

  onNewClick(){
    alert("Nuevo Ingreso");
    this.chiva=new Chiva();
  }

  onSaveClick(){
    alert("Se ha guardado " + this.chiva.nombre);
    this.chivaData.GuardarChiva(this.chiva)
  }

}



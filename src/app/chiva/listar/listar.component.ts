import { Component, OnInit } from '@angular/core';
import { ChivaService } from '../chiva.service';
import{ChivaDataService} from '../chiva-data.service';
import { Chiva } from '../chiva';

@Component({
  selector: 'app-listar-chiva',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [ChivaDataService]
})
export class ListarComponent implements OnInit {
  newData:any

  constructor(
    //private chivaService:ChivaService
    private chivaData:ChivaDataService
  ) { }

  ngOnInit() {
    this.chivaData.CargarChivas();
  }

  
}

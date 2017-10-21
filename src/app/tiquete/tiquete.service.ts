import { Injectable } from '@angular/core';
import { Tiquete } from './tiquete';

@Injectable()
export class TiqueteService {

  tiquetesList:Array<Tiquete>;


  constructor() { }

}

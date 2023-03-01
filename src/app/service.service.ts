import { Injectable } from '@angular/core';
import { vegdb } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getData(){
    return vegdb
  }
}

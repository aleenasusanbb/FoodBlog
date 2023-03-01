import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  vegdetails:any
  constructor(private D:ServiceService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.D.getData();
    this.vegdetails=arrd.filter(e=>e.name==idd)
  }

}

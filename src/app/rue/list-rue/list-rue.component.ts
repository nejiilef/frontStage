import { Component, OnInit } from '@angular/core';
import { IRue } from '../model/irue';
import { RueService } from '../service/rue.service';

@Component({
  selector: 'app-list-rue',
  templateUrl: './list-rue.component.html',
  styleUrls: ['./list-rue.component.css']
})
export class ListRueComponent implements OnInit{
  btStyle={'border-radius': '4px'}
  buttonStyle = { 'font-size': '1,5em' , 'width' : '6em','margin-top': '10px','border-radius': '5px','margin-left':'6px'};

  constructor(private service : RueService){}
ngOnInit(): void {
  this.service.getAllRues().subscribe(rues=>{
    this.rues=rues
  })
}
rues!:IRue[];
deleteRue(id:number){
  this.service.deleteRue(id).subscribe((response)=>{
    this.ngOnInit()
  })
}
}

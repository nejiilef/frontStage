import { Component, OnInit } from '@angular/core';
import { ArrondissementService } from '../service/arrondissement.service';
import { IArrondissement } from '../model/iarrondissement';

@Component({
  selector: 'app-list-arrondissement',
  templateUrl: './list-arrondissement.component.html',
  styleUrls: ['./list-arrondissement.component.css']
})
export class ListArrondissementComponent implements OnInit{
  btStyle={'border-radius': '4px'}
  buttonStyle = { 'font-size': '1,5em' , 'width' : '6em','margin-top': '10px','border-radius': '5px','margin-left':'6px'};

  arrondissements!:IArrondissement[];
constructor(private service:ArrondissementService){}
  ngOnInit(): void {
    this.service.getAllArrondissements().subscribe(arrondissements=>
      {this.arrondissements=arrondissements});
  }

deleteArrondissement(id:number){
  this.service.deleteArrondissement(id).subscribe((response)=>{
    this.ngOnInit();
  })
}
}

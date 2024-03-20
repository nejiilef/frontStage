import { Component, OnInit } from '@angular/core';
import { IZone } from '../model/izone';
import { ZoneService } from '../service/zone.service';

@Component({
  selector: 'app-list-zone',
  templateUrl: './list-zone.component.html',
  styleUrls: ['./list-zone.component.css']
})
export class ListZoneComponent implements OnInit{
zones!:IZone[];
btStyle={'border-radius': '4px'}
buttonStyle = { 'font-size': '1,5em' , 'width' : '6em','margin-top': '10px','border-radius': '5px','margin-left':'6px'};

constructor(private service :ZoneService){}
  ngOnInit(): void {
   this.service.getAllZones().subscribe(zones=>{
   
    this.zones=zones
   });
  }
  deleteZone(id:number){
    this.service.deleteZone(id).subscribe((response)=>{
      alert(response)
      this.ngOnInit();
    })
  }
}

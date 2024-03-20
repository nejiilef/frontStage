import { Component, OnInit } from '@angular/core';
import { ITerrain } from '../model/iterrain';
import { TerrainService } from '../service/terrain.service';

@Component({
  selector: 'app-list-terrain',
  templateUrl: './list-terrain.component.html',
  styleUrls: ['./list-terrain.component.css']
})
export class ListTerrainComponent implements OnInit{
  terrains!:ITerrain[];
  btStyle={'border-radius': '4px'}
  buttonStyle = { 'font-size': '1,5em' , 'width' : '6em','margin-top': '10px','border-radius': '5px','margin-left':'6px'};

  constructor(private service:TerrainService){}
  
  ngOnInit(): void {
   this.service.getAllTerrains().subscribe(terrains=>{
    this.terrains=terrains
   })
  }
  deleteTerrain(id:number){
    this.service.deleteTerrain(id).subscribe((response)=>{
      alert(response)
      this.ngOnInit();
    })
  }

}

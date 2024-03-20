import { Component, OnInit } from '@angular/core';
import { TerrainService } from '../service/terrain.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ITerrainDTO } from '../model/iterrain-dto';
import { IArrondissement } from 'src/app/arrondissement/model/iarrondissement';
import { IZone } from 'src/app/zone/model/izone';
import { IRue } from 'src/app/rue/model/irue';
import { ZoneService } from 'src/app/zone/service/zone.service';
import { RueService } from 'src/app/rue/service/rue.service';
import { ArrondissementService } from 'src/app/arrondissement/service/arrondissement.service';

@Component({
  selector: 'app-add-terrain',
  templateUrl: './add-terrain.component.html',
  styleUrls: ['./add-terrain.component.css']
})
export class AddTerrainComponent implements OnInit{
  rues!: IRue[];
constructor(private service:TerrainService,private router:Router,private serviceRue:RueService,private arrondissementService:ArrondissementService,private zoneService:ZoneService){}
subbmited=false;
ngOnInit(): void {
  this.arrondissementService.getAllArrondissements().subscribe((response)=>{
    this.arrondissements=response;
  })
}
onSubmit(f:NgForm){
  this.subbmited=true;
    if(f.invalid){
      return
    }
    else{
      this.addTerrain(f);
    }}
    arrondissements!:IArrondissement[];
    selectedArrondissement!:IArrondissement;
    selectedZone!:IZone;
    zones!:IZone[];
    showZoneSelector=false;
    showRueSelector=false;
    selectedRue!:IRue;
addTerrain(f:NgForm){
  const newTerrain={
    surface: f.value.surface,
    adresse : f.value.adresse,
    
  }
  console.log(newTerrain)
  this.service.addTerrain(newTerrain as ITerrainDTO,f.value.prop,this.selectedRue.id).subscribe(
    response => {
   
      console.log('Terrain added successfully:', response);
    },
    error => {
     
      console.error('Error adding Terrain:', error);
    }
  );
  this.router.navigate(["/terrain"]);
  
}
OnArrondissementChange(){
  if(this.selectedArrondissement){
    this.showZoneSelector=true;
    this.arrondissementService.getAllZonesArrondissement(this.selectedArrondissement.id).subscribe((response)=>{
      console.log("response : "+response);
             this.zones=response
    })
  }
}
OnZoneChange(){
  if(this.selectedZone){
    this.showRueSelector=true;
    this.zoneService.getAllRuesZone(this.selectedZone.id).subscribe((response)=>{
      console.log("response : "+response);
      this.rues=response;
    })

  }
}

}

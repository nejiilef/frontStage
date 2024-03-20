import { Component, OnInit } from '@angular/core';
import { RueService } from '../service/rue.service';
import { ArrondissementService } from 'src/app/arrondissement/service/arrondissement.service';
import { ZoneService } from 'src/app/zone/service/zone.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IRueDTO } from '../model/irue-dto';
import { IArrondissement } from 'src/app/arrondissement/model/iarrondissement';
import { IZone } from 'src/app/zone/model/izone';

@Component({
  selector: 'app-add-rue',
  templateUrl: './add-rue.component.html',
  styleUrls: ['./add-rue.component.css']
})
export class AddRueComponent implements OnInit{
  selectedArrondissement!:IArrondissement;
  selectedZone!:IZone;
constructor(private service:RueService,private arrondissementService:ArrondissementService,private zoneService:ZoneService,private router:Router){}
  ngOnInit(): void {
    this.arrondissementService.getAllArrondissements().subscribe((response)=>{
      this.arrondissements=response;
    })
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
subbmited=false;
arrondissements!:IArrondissement[];
zones!:IZone[];
showZoneSelector=false;
onSubmit(f:NgForm){
  this.subbmited=true;
    if(f.invalid){
      return
    }
    else{
      this.addRue(f);
    }}

addRue(f:NgForm){
  const newRue={
    nom:f.value.nom
  }
  this.service.addRue(newRue as IRueDTO,this.selectedZone.id).subscribe((response)=>{
    console.log('Rue added successfully:', response);
   
  }
  ,
    error => {
     
      console.error('Error adding Rue:', error);
    });
    this.router.navigate(["/rue"]);
}
}

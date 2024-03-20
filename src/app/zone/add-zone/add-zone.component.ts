import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ZoneService } from '../service/zone.service';
import { IZoneDTO } from '../model/izone-dto';
import { Router } from '@angular/router';
import { ArrondissementService } from 'src/app/arrondissement/service/arrondissement.service';
import { IArrondissement } from 'src/app/arrondissement/model/iarrondissement';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})
export class AddZoneComponent implements OnInit{
  constructor(private service:ZoneService,private router:Router,private serviceArrondissement:ArrondissementService){

  }
  arrondissements!:IArrondissement[];
  selectedArrondissement!:IArrondissement;
  ngOnInit(): void {
    this.serviceArrondissement.getAllArrondissements().subscribe((response)=>{
      this.arrondissements=response;

    })
      }
  subbmited=false;
onSubmit(f:NgForm){
  this.subbmited=true;
    if(f.invalid){
      return
    }
    else{
      this.addZone(f);
    }}
addZone(f:NgForm){
  const newZone={
    nom:f.value.nom
  }
  this.service.addZone(newZone as IZoneDTO,this.selectedArrondissement.id).subscribe(
    response=>{
      console.log('Zone added successfully:', response);
   
    },
    error => {
     
      console.error('Error adding zone:', error);
    }
  )
;
this.router.navigate(["/zone"]);
}
}
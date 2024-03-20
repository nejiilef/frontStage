import { Component } from '@angular/core';
import { ArrondissementService } from '../service/arrondissement.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IArrondissementDTO } from '../model/iarrondissement-dto';

@Component({
  selector: 'app-add-arrondissement',
  templateUrl: './add-arrondissement.component.html',
  styleUrls: ['./add-arrondissement.component.css']
})
export class AddArrondissementComponent {
constructor(private service:ArrondissementService,private router:Router){}
subbmited=false;
onSubmit(f:NgForm){
  this.subbmited=true;
    if(f.invalid){
      return
    }
    else{
this.addArrondissement(f)
}
}
addArrondissement=(f:NgForm)=>{
 const newArr={ nom:f.value.nom}
 this.service.addArrondissement(newArr as IArrondissementDTO).subscribe(
  response => {
 
    console.log('Arrondissement added successfully:', response);
  },
  error => {
   
    console.error('Error adding Arrondissement:', error);
  }
 );
 this.router.navigate(["/arrondissement"]);
}

}

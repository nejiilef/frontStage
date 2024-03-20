import { Component } from '@angular/core';
import { ProprietaireService } from '../service/proprietaire.service';
import { NgForm } from '@angular/forms';
import { IProprietaireDTO } from '../model/iproprietaire-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-proprietaire',
  templateUrl: './add-proprietaire.component.html',
  styleUrls: ['./add-proprietaire.component.css']
})
export class AddProprietaireComponent {
  subbmited=false;
constructor(private service:ProprietaireService,private router:Router){}
onSubmit(f:NgForm){
  this.subbmited=true;
    if(f.invalid){
      return
    }
    else{
this.addProprietaire(f)
}
}
addProprietaire(f:NgForm){
const newProp={
  cin:f.value.cin,
  nom : f.value.nom,
  prenom : f.value.prenom,
  adresse : f.value.adresse,
  telephone: f.value.tel,
  email:f.value.email
}
this.service.addProprietaire(newProp as IProprietaireDTO).subscribe(
  response => {
 
    console.log('Proprietaire added successfully:', response);
  },
  error => {
   
    console.error('Error adding Proprietaire:', error);
  }
);
this.router.navigate(["/proprietaire"]);
}
}

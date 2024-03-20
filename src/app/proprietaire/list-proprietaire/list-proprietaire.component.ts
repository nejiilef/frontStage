import { Component, OnInit } from '@angular/core';
import { IProprietaire } from '../model/iproprietaire';
import { ProprietaireService } from '../service/proprietaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-proprietaire',
  templateUrl: './list-proprietaire.component.html',
  styleUrls: ['./list-proprietaire.component.css']
})
export class ListProprietaireComponent implements OnInit{
  btStyle={'border-radius': '4px'}
  buttonStyle = { 'font-size': '1,5em' , 'width' : '6em','margin-top': '10px','border-radius': '5px','margin-left':'6px'};

  proprietaires!:IProprietaire[];
  
  constructor(private service:ProprietaireService,private router:Router){}
  ngOnInit(): void {
    this.service.getAllProprietaires().subscribe(proprietaires=>{
      this.proprietaires=proprietaires
    })
  }
deleteProprietaire(id:number){
  this.service.deleteProprietaire(id).subscribe((response)=>{
    console.log(response)
   this.ngOnInit();
  })

}
}

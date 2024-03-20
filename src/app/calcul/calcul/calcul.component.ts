import { Component } from '@angular/core';
import { IArrondissement } from 'src/app/arrondissement/model/iarrondissement';
import { IDensite } from 'src/app/calcul/model/idensite';
import { IProprietaire } from 'src/app/proprietaire/model/iproprietaire';
import { IRue } from 'src/app/rue/model/irue';
import { ITerrainDTO } from 'src/app/terrain/model/iterrain-dto';
import { IZone } from 'src/app/zone/model/izone';

import { ProprietaireService } from 'src/app/proprietaire/service/proprietaire.service';
import { ZoneService } from 'src/app/zone/service/zone.service';
import { ArrondissementService } from 'src/app/arrondissement/service/arrondissement.service';
import { RueService } from 'src/app/rue/service/rue.service';
import { TerrainService } from 'src/app/terrain/service/terrain.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IProprietaireDTO } from 'src/app/proprietaire/model/iproprietaire-dto';
import { IEmailDTO } from 'src/app/calcul/model/iemail-dto';

import { ICalculTaxeDTO } from 'src/app/calcul/model/icalcul-taxe-dto';

import { CalculService } from '../service/calcul.service';
import { IPDFRequestDTO } from '../model/ipdfrequest-dto';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent {
  newTerrain!:ITerrainDTO;
  affichage=false;
  arrondissements!: IArrondissement[];
  showZoneSelector = false;
  showRueSelector = false;
  selectedArrondissement!: IArrondissement;
  selectedZone!: IZone;
  zones!: IZone[];
  selectedRue!: IRue;
  rues!: IRue[];
  densites!: IDensite[];
  prop!: IProprietaire;
  taxe!: string;
  selectedDensite!: IDensite;
  selectedDensiteId!: number;
  selectedCalculationMethod!:any;
  cin!:number;
  ingredient!:string
  Cstyle={ 'width': '420px'}
  afficher: boolean=false;
  visible: boolean=false;
  constructor(
    private service: CalculService,
    private serviceProprietaire: ProprietaireService,
    private serviceTerrain: TerrainService,
    private serviceRue: RueService,
    private serviceZone: ZoneService,
    private serviceArrondissement: ArrondissementService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.serviceArrondissement.getAllArrondissements().subscribe((response) => {
      this.arrondissements = response;
      this.service.getAllDensites().subscribe((response) => {
        this.densites = response;
      });
    });
  }
  editProprietaire(f: NgForm): void {
    const values = f.value;
    const editedProprietaire: IProprietaireDTO = {
      cin: values.cin,
      nom: values.nom,
      prenom: values.prenom,
      email: values.email,
      telephone: values.tel,
      adresse: values.adresse,
    };
    this.serviceProprietaire
      .editProprietaire(editedProprietaire, this.prop.id)
      .subscribe((response) => {
        console.log('Proprietaire edited successfully:', response);
      });
  }
  showDialog() {
    this.visible = !this.visible;
  }
  addProprietaire(f: NgForm) {
    const newProp = {
      cin: f.value.cin,
      nom: f.value.nom,
      prenom: f.value.prenom,
      adresse: f.value.adresse,
      telephone: f.value.tel,
      email: f.value.email,
    };
    this.serviceProprietaire
      .addProprietaire(newProp as IProprietaireDTO)
      .subscribe(
        (response) => {
          console.log('Proprietaire added successfully:', response);
        },
        (error) => {
          console.error('Error adding Proprietaire:', error);
        }
      );
  }

  OnArrondissementChange() {
    if (this.selectedArrondissement) {
      this.showZoneSelector = true;
      this.serviceArrondissement
        .getAllZonesArrondissement(this.selectedArrondissement.id)
        .subscribe((response) => {
          console.log('response : ' + response);
          this.zones = response;
        });
    }
  }
  OnZoneChange() {
    if (this.selectedZone) {
      this.showRueSelector = true;
      this.serviceZone
        .getAllRuesZone(this.selectedZone.id)
        .subscribe((response) => {
          console.log('response : ' + response);
          this.rues = response;
        });
    }
  }
  addTerrain(f: NgForm) {
    this.newTerrain = {
      surface: f.value.surface,
      adresse: f.value.adresseT,
    };
    this.serviceTerrain
      .addTerrain(this.newTerrain as ITerrainDTO, this.prop.id, this.selectedRue.id)
      .subscribe(
        (response) => {
          console.log('Terrain added successfully:', response);
        },
        (error) => {
          console.error('Error adding Terrain:', error);
        }
      );
  }
  sendEmail(f:NgForm) {
    const mail = {
      to: f.value.to,
      cc: 'ilefneji334@gmail.com',
      subject: f.value.sujet,
      body: f.value.body,
    } as IEmailDTO;
    console.log(mail);
    this.service.sendEmail(mail).subscribe((response)=>{
      console.log(response)
    });
  }
generatePDF(){
const pdf={
  montant:+this.taxe,
proprietaire:this.prop
} as IPDFRequestDTO;
console.log(pdf);
this.service.generatePDF(pdf).subscribe(x => {
  const blob=new Blob([x],{type:'application/pdf'});
  const url=URL.createObjectURL(
    blob
    ) ;
    window.open(url,'_blank');

});
}
  
 
  disableForm(){
    let form = document.getElementById('form') as HTMLFormElement;
    const formElements = form!.elements;
    for (let i = 0; i < formElements.length; i++) {
      (formElements[i] as HTMLInputElement).disabled = true;
    }
  }
  onSubmit(f: NgForm) {
    if (f.invalid) {
      return;
    } else {
      this.disableForm();
      this.cin = f.value.cin;
      this.serviceProprietaire.getAllProprietaires().subscribe((response) => {
        this.prop = response.find(p => p.cin === this.cin)!;
  
        console.log(this.cin);
        if (this.prop) {
          this.editProprietaire(f);
        } else {
          this.addProprietaire(f);
        }
  
        if (this.selectedDensite) {
          this.selectedDensiteId = this.selectedDensite.id;
        } else {
          this.selectedDensiteId = -1;
        }
  
        let c = {
          surface: f.value.surface,
          methodeCalcul: +f.value.calculationMethod,
          valeurVenale: f.value.valeur | 0,
          densiteId: this.selectedDensiteId,
        } as ICalculTaxeDTO;
        
        this.service.calculTaxe(c).subscribe((response) => {
          this.taxe = response;
          alert(response);
         
          
          this.serviceProprietaire.getAllProprietaires().subscribe((response) => {
            
          
            this.prop = response.find(p => p.cin === this.cin)!;
            this.afficher = true;
         
            this.addTerrain(f);
            
          });
        });
        
            
      });
    }
    
  }}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprietaireService } from '../service/proprietaire.service';
import { IProprietaire } from '../model/iproprietaire';
import { IProprietaireDTO } from '../model/iproprietaire-dto';

@Component({
  selector: 'app-edit-proprietaire',
  templateUrl: './edit-proprietaire.component.html',
  styleUrls: ['./edit-proprietaire.component.css']
})
export class EditProprietaireComponent implements OnInit {
  editProprietaireForm!: FormGroup;
  prop!: IProprietaire;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: ProprietaireService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametres) => {
      this.service.getPropById(+parametres['id']).subscribe((prop) => {
        if (prop) {
          this.prop = prop;
          this.initializeForm();
        }
      });
    });
  }

  initializeForm(): void {
    this.editProprietaireForm = this.formBuilder.group({
      cin:[this.prop.cin,Validators.required],
      nom: [this.prop.nom, Validators.required],
      prenom: [this.prop.prenom, Validators.required],
      email: [this.prop.email, [Validators.email, Validators.required]],
      telephone: [this.prop.telephone, [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      adresse: [this.prop.adresse, Validators.required]
    });
  }

  editProprietaire(): void {
    if (this.editProprietaireForm.invalid) {
      return;
    }

    const values = this.editProprietaireForm.value;
    const editedProprietaire: IProprietaireDTO = {
      cin:values.cin,
      nom: values.nom,
      prenom: values.prenom,
      email: values.email,
      telephone: values.telephone,
      adresse: values.adresse
    };

    this.service.editProprietaire(editedProprietaire, this.prop.id).subscribe(() => {
      this.router.navigate(['proprietaire']);
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.editProprietaire();
  }
}

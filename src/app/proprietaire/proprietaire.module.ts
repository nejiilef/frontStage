import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietaireRoutingModule } from './proprietaire-routing.module';
import { ListProprietaireComponent } from './list-proprietaire/list-proprietaire.component';
import { AddProprietaireComponent } from './add-proprietaire/add-proprietaire.component';
import { EditProprietaireComponent } from './edit-proprietaire/edit-proprietaire.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    ListProprietaireComponent,
    AddProprietaireComponent,
    EditProprietaireComponent
  ],
  imports: [
    CommonModule,
    ProprietaireRoutingModule,
    FormsModule,
   ReactiveFormsModule,
   TableModule,
   ButtonModule
  ]
})
export class ProprietaireModule { }

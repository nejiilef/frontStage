import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrondissementRoutingModule } from './arrondissement-routing.module';
import { ListArrondissementComponent } from './list-arrondissement/list-arrondissement.component';
import { AddArrondissementComponent } from './add-arrondissement/add-arrondissement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditArrondissementComponent } from './edit-arrondissement/edit-arrondissement.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ListArrondissementComponent,
    AddArrondissementComponent,
    EditArrondissementComponent
  ],
  imports: [
    CommonModule,
    ArrondissementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule
  ]
})
export class ArrondissementModule { }

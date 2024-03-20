import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RueRoutingModule } from './rue-routing.module';
import { ListRueComponent } from './list-rue/list-rue.component';
import { AddRueComponent } from './add-rue/add-rue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRueComponent } from './edit-rue/edit-rue.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ListRueComponent,
    AddRueComponent,
    EditRueComponent
  ],
  imports: [
    CommonModule,
    RueRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule
  ]
})
export class RueModule { }

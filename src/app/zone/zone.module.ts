import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneRoutingModule } from './zone-routing.module';
import { ListZoneComponent } from './list-zone/list-zone.component';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditZoneComponent } from './edit-zone/edit-zone.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [

    ListZoneComponent,
     AddZoneComponent,
     EditZoneComponent
  ],
  imports: [
    CommonModule,
    ZoneRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule
  ]
})
export class ZoneModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerrainRoutingModule } from './terrain-routing.module';
import { ListTerrainComponent } from './list-terrain/list-terrain.component';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';
import { EditTerrainComponent } from './edit-terrain/edit-terrain.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TreeSelectModule } from 'primeng/treeselect';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    ListTerrainComponent,
    AddTerrainComponent,
    EditTerrainComponent
  ],
  imports: [
    CommonModule,
    TerrainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TreeSelectModule,
    TableModule,
    ButtonModule
  ]
})
export class TerrainModule { }

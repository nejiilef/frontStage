import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTerrainComponent } from './list-terrain/list-terrain.component';
import { AddProprietaireComponent } from '../proprietaire/add-proprietaire/add-proprietaire.component';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';
import { EditTerrainComponent } from './edit-terrain/edit-terrain.component';
import { guardGuard } from '../auth/guard/guard.guard';

const routes: Routes = [
  { path: '', component:ListTerrainComponent,canActivate:[guardGuard] },
  { path: 'add', component:AddTerrainComponent,canActivate:[guardGuard] },
  { path: 'edit/:id', component:EditTerrainComponent,canActivate:[guardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerrainRoutingModule { }

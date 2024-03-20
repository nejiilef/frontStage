import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProprietaireService } from './service/proprietaire.service';
import { ListProprietaireComponent } from './list-proprietaire/list-proprietaire.component';
import { AddProprietaireComponent } from './add-proprietaire/add-proprietaire.component';
import { EditProprietaireComponent } from './edit-proprietaire/edit-proprietaire.component';
import { guardGuard } from '../auth/guard/guard.guard';

const routes: Routes = [
  { path: '', component:ListProprietaireComponent ,canActivate:[guardGuard]},
  { path: 'add', component:AddProprietaireComponent ,canActivate:[guardGuard]},
  { path: 'edit/:id', component:EditProprietaireComponent,canActivate:[guardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietaireRoutingModule { }

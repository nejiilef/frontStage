import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRueComponent } from './list-rue/list-rue.component';
import { AddRueComponent } from './add-rue/add-rue.component';
import { EditRueComponent } from './edit-rue/edit-rue.component';
import { guardGuard } from '../auth/guard/guard.guard';

const routes: Routes = [
  { path: '', component: ListRueComponent,canActivate:[guardGuard] },
  { path: 'add', component: AddRueComponent ,canActivate:[guardGuard]},
  { path: 'edit/:id', component: EditRueComponent,canActivate:[guardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RueRoutingModule { }

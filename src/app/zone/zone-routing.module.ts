import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListZoneComponent } from './list-zone/list-zone.component';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { EditZoneComponent } from './edit-zone/edit-zone.component';
import { guardGuard } from '../auth/guard/guard.guard';

const routes: Routes = [
  { path: '', component:ListZoneComponent,canActivate:[guardGuard] },
  { path: 'add', component:AddZoneComponent ,canActivate:[guardGuard]},
  { path: 'edit/:id', component:EditZoneComponent ,canActivate:[guardGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoneRoutingModule { }

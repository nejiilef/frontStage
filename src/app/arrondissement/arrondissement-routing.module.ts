import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArrondissementComponent } from './list-arrondissement/list-arrondissement.component';
import { AddArrondissementComponent } from './add-arrondissement/add-arrondissement.component';
import { EditArrondissementComponent } from './edit-arrondissement/edit-arrondissement.component';
import { guardGuard } from '../auth/guard/guard.guard';

const routes: Routes = [
  {path:'',component:ListArrondissementComponent,canActivate:[guardGuard] },
  {
    path:'add',component:AddArrondissementComponent,canActivate:[guardGuard] 
  },
  {
    path:'edit/:id',component:EditArrondissementComponent,canActivate:[guardGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrondissementRoutingModule { }

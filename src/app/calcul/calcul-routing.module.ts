import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculComponent } from './calcul/calcul.component';
import { guardGuard } from '../auth/guard/guard.guard';

const routes: Routes = [
  {
    path:"",component:CalculComponent,canActivate:[guardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculRoutingModule { }

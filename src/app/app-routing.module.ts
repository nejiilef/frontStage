import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'user',loadChildren:()=>import('./user/user.module' ).then(m=>m.UserModule)
  },
  {
    path:'auth',loadChildren:()=>import('./auth/auth.module' ).then(m=>m.AuthModule)
  },
  {
    path:'arrondissement',loadChildren:()=>import('./arrondissement/arrondissement.module' ).then(m=>m.ArrondissementModule)
  },
  {
    path:'zone',loadChildren:()=>import('./zone/zone.module' ).then(m=>m.ZoneModule)
  },
  {
    path:'rue',loadChildren:()=>import('./rue/rue.module' ).then(m=>m.RueModule)
  },
  {
    path:'terrain',loadChildren:()=>import('./terrain/terrain.module' ).then(m=>m.TerrainModule)
  },
  {
    path:'proprietaire',loadChildren:()=>import('./proprietaire/proprietaire.module' ).then(m=>m.ProprietaireModule)
  },
  {
    path:'calcul',loadChildren:()=>import('./calcul/calcul.module' ).then(m=>m.CalculModule)
  },
  
  {
    path:'',redirectTo:'auth/login',pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

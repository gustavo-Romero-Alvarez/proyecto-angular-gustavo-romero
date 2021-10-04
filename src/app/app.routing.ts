import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DatosComponent} from '../app/components/datos/datos.component'

const appRoutes : Routes = [
    { path: 'datos2', component: DatosComponent}
  ];

 @NgModule({
     imports:[RouterModule.forRoot(appRoutes,{useHash:true,scrollPositionRestoration:'enabled'})],
     exports:[RouterModule]
 }

 ) 
export class AppRoutingModule{}
export const routing = RouterModule.forRoot(appRoutes);
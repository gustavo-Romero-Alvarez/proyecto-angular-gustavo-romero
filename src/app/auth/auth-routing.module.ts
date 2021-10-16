import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import {RegistroComponent} from '../auth/pages/registro/registro.component';


const routes:Routes=[
  {
    path:'',
    children:[
      {path:'registro', component: RegistroComponent},
      {path:'**', redirectTo:'registro'}
    ]
  }
]


@NgModule({

  imports: [
   RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }

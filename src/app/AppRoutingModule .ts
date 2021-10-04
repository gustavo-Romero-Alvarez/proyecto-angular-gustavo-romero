import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import{NotFoundComponent} from '../app/components/not-found/not-found.component'
import{LoginComponent} from '../app/components/login/login.component'
const routes: Routes = [
  {
    path: 'login',component: LoginComponent,
    
  },
  {
    path: 'not',component: NotFoundComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
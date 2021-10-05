import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import{NotFoundComponent} from '../app/components/not-found/not-found.component'
import{LoginComponent} from '../app/components/login/login.component'
import {HomeComponent} from '../app/components/home/home.component'
import{AuthGuard} from '../app/shared/guards/auth.guard'
const routes: Routes = [
  { path: 'login',component: LoginComponent,},
  { path: 'not-found',component: NotFoundComponent,canActivate:[AuthGuard]},
  { path: 'Home',component: HomeComponent,canActivate:[AuthGuard]},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
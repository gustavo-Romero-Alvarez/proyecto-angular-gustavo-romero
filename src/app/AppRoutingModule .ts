import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import{NotFoundComponent} from '../app/components/not-found/not-found.component'
import{LoginComponent} from '../app/components/login/login.component'
import {HomeComponent} from '../app/components/home/home.component'
import{AuthGuard} from '../app/shared/guards/auth.guard'
//import{LazyLoadComponent} from '../app/components/lazy-load/lazy-load.component'
const routes: Routes = [
  { path: 'login',component: LoginComponent,},
  { path: 'lazyload',  loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)},
  { path: 'not-found',component: NotFoundComponent,canActivate:[AuthGuard]},
  { path: 'Home',component: HomeComponent,canActivate:[AuthGuard]},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:'**', redirectTo:'not-found'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
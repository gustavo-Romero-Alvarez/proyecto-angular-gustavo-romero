import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
//service
import {ApiService} from './service/api.service'
import { AppComponent } from './app.component';
import { AppRoutingModule} from './AppRoutingModule ';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { MenuComponent } from './menu/menu.component';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { DatosComponent } from './components/datos/datos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';






@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    PedidoComponent,
    MenuComponent,
    FilterPipe,
    DatosComponent,
    NotFoundComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    AppRoutingModule
  
    
 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

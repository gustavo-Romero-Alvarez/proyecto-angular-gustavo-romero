import { registerLocaleData } from '@angular/common';
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[]

  @Output() productoSeleccionado: EventEmitter<Producto>;
  constructor() { 
    this.productoSeleccionado= new EventEmitter();
  }

  filterPost= '';
   //metodo utilizado para registrar la hora de actividad del usuario
  ngOnInit(): void {
    var hoy = new Date();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    localStorage.setItem("inicio registro",hora);
  }

  //metodo utilizado para registrar la ultima actividad del usuario
  ngDoCheck(): void{
    var hoy = new Date();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
   
    localStorage.setItem("ultimoregistro",hora);
  }
  onClick(pProducto)
  {
    
    this.productoSeleccionado.emit(pProducto);
   
  }

}

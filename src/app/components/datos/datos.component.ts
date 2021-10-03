import { Component,Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  @Input() arrProductos2: Producto[];
  comboBox:number[];
  comboBoxName:String[];
  comboBoxBody:String[];
  respuesta:boolean;
  busquedapro: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

}

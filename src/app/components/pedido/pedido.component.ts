import { Component, Input, OnInit } from '@angular/core';

import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  @Input() arrProductos: Producto[];
  imagenpedido:string;
  constructor() { 
  }

  condition=true;
  ngOnInit(): void {
    this.imagenpedido="https://www.jornada.com.mx/2019/08/24/fotos/a06n1esp-1.jpg"
 
  }

  ngAfterContentInit(): void {

 }

 
 totalDeLista(){
   

  let resultado=0;   
  for (let producto of this.arrProductos){
    resultado+= (producto.id* producto.cantidad);
  }   
  
  if(resultado!=0 && this.arrProductos.length!=0){ 
   localStorage.setItem('productos',JSON.stringify(this.arrProductos));
     } 

   if(resultado>0){
     this.condition=false;
   }
   else{
     this.condition=true
   }
      
  return resultado;

  }


  guardarLS()
  {
        let products =localStorage.getItem('productos');
        if(products== null)
        {
          this.arrProductos=[];
        }
        else
        {
          this.arrProductos=JSON.parse(products);

        }       
  }

  ObtenerLS(){
    let products =localStorage.getItem('productos');
    if(products.length!=0){
      this.arrProductos =JSON.parse(products);
    }
           
  }

  onClickBorrar(indice){
 
 
    if(this.arrProductos[indice].cantidad===1)
    {
      this.arrProductos.splice(indice,1)
      localStorage.setItem('productos',JSON.stringify(this.arrProductos));
    }
    else{
      this.arrProductos[indice].cantidad--
             
    }
    
  }
  mouseenter(){
    this.imagenpedido="https://i.pinimg.com/originals/d8/86/97/d88697f58aba1578d60a0579a08e12c7.jpg"
  }
  mouseleave(){
    this.imagenpedido="https://www.jornada.com.mx/2019/08/24/fotos/a06n1esp-1.jpg"
  }

}

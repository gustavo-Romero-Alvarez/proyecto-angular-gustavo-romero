import { Component, ViewEncapsulation } from '@angular/core';
import { Poke } from './interface/poke';
import { Producto } from './models/producto.model'
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class AppComponent {
 
 arrComida: Poke[];
 arrBebida: Poke[];
 arrpoke: any;
 
 productosSeleccionados: Producto[];
 urlImagen: string;
 
constructor(private apiService :ApiService){
  this.productosSeleccionados=[];
}
ngOnInit() {

  this.apiService.getallpersonajes().subscribe(res =>{
    
      this.arrComida=res["results"]
      console.log(this.arrComida)
      console.log(this.desestructurar1(res["results"]))
  }); 


  this.apiService.getpokemon(1).subscribe(res =>{    
    console.log(res)
    this.arrBebida=[{id:res["id"],name:res["name"],image:res["sprites"].back_default}]
  }); 

this.getallpoke()

function rename() {
  this.arrBebida.forEach(obj => renameKey(obj, 'title', 'name'));

}
   
function renameKey(obj, old_key, new_key) {
  // comprobar si la clave antigua = la nueva clave   
 if(old_key !== new_key) {
    // Modificar la antigua descripción de extracción de claves del objeto
   Object.defineProperty(obj, new_key, 
      Object.getOwnPropertyDescriptor(obj, old_key));
    delete obj [old_key]; // elimina la clave anterior
 }
}


  //probar si funciona
  setTimeout(() => {
    let products =localStorage.getItem('productos');
    if(products.length!=0){
      console.log('hay productos');
       this.productosSeleccionados =JSON.parse(products);
    }        
     });    
     setTimeout(() => {
      
          
       });
}

desestructurar1 = (trabajador) => {
  const [{
      name: titulo
     
  }] = trabajador;
  return `El primer titulo es : ${titulo} `;
};

getallpoke(){
  let arreglo=[];
  for(let i=1;i<30;i++){
    this.apiService.getpokemon(i).subscribe(res =>{    
      console.log(res)
      //this.arrBebida=[{id:res["id"],name:res["name"],image:res["sprites"].front_default}]
      arreglo.push({id:res["id"],name:res["name"],image:res["sprites"].front_default})
      console.log(arreglo)
      this.arrBebida=arreglo;
    }); 
  
  }
  
 
}
onProductoSeleccionado($event){

  const productoEncontado= this.productosSeleccionados.find(producto=> producto.name=== $event.name);
  //this.productosSeleccionados.push($event);
  if(productoEncontado){
    productoEncontado.cantidad++;
  }
  else{
    $event.cantidad=1;
    this.productosSeleccionados.push($event);
    console.log(this.productosSeleccionados);
  }
}








}

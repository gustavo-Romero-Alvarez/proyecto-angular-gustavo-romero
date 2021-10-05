import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  pokemon:any;

  name=""
  imagefront=""
  imagenback="";
  imageshiny="";
  imageshinyfront="";
  idpoke=0;
   error=true; 
  
  constructor(private apiService :ApiService) { }

  ngOnInit(): void {
    
   
  }

  buscarpokemon($event){

    this.apiService.getpokemon(this.idpoke).subscribe(res =>{  
     this.pokemon=res;
     console.log(res);
     console.log(res["sprites"].back_default);
     this.imagenback=res["sprites"].back_default;
     this.imagefront=res["sprites"].front_default
     this.imageshiny=res["sprites"].back_shiny;
     this.imageshinyfront=res["sprites"].front_shiny;
     this.name=res["name"];

       // Entra aquí con respuesta del servicio correcta código http 200
       this.error=false
     
   }, err => {
       // Entra aquí si el servicio entrega un código http de error EJ: 404, 
       console.log("se metio al error")
       console.log(err)
       this.error=true
   })

   
  }
}

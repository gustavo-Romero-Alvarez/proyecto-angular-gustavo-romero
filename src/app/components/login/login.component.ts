import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario="usuario_agular";
  contrasena="contra1234";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  iniciarsesion(){
 
    if(this.usuario=="usuario_agular" && this.contrasena=="contra1234"){
      console.log("logueado")
      localStorage.setItem("logueado","true")
      this.router.navigate(['Home']);

    }
    else{
      console.log("deslogueado")
      localStorage.setItem("logueado","false")

    }
  }
}

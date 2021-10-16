import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario="usuario_agular";
  contrasena="contra1234";
  user: FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
      
    });
  }

  iniciarsesion(){

    console.log(this.user.controls["name"].value)
    console.log(this.user.controls["password"].value)
    if(this.user.controls["name"].value=="usuario_agular" &&  this.user.controls["password"].value=="contra1234"){
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

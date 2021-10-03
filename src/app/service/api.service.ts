import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http' 
import { Observable } from 'rxjs';
import { Poke } from '../interface/poke';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

    public getallpersonajes(){

      return this.http.get(`${'https://rickandmortyapi.com/api/character'}`);
    }
     
    public getpokemon(id:number){

      let pokemon='https://pokeapi.co/api/v2/pokemon/1'

      return this.http.get(`${'https://pokeapi.co/api/v2/pokemon/'+id}`);
    }
   
}

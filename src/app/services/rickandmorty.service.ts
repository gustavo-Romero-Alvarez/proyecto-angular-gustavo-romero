import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http :HttpClient) { }
  public getallpersonajes(){
    let url = environment.rickandmorty;
    return this.http.get(`${url}`);
  }
}

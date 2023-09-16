import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'; //siempre va


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.baseURL;
  constructor(private http:HttpClient) {}

  getPokemons(index: any){
    console.log(this.baseUrl);
    return this.http.get(`${this.baseUrl}/pokemon/${index}`)
  }
}

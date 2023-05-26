import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ambiente } from 'src/ambiente/ambiente'
import { Observable } from 'rxjs';
import { PokemonDados } from '../modelos/pokemonDados'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ""
  private pokeDados:PokemonDados | any

  constructor( private http:HttpClient ) {
    this.baseURL = ambiente.pokeApi
  }

  getPokemon(pokemonNome:string):Observable<PokemonDados>{
    this.pokeDados = this
                     .http
                     .get<PokemonDados>
                     (`${this.baseURL}${pokemonNome}`)
    return this.pokeDados
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PokemonsList } from '../interfaces/pokemonList';
import { PokemonInfo } from '../interfaces/pokemonInfo';

@Injectable({
  providedIn: 'root'
})
export class PokeApi {

  constructor(private http: HttpClient) { }

  getPokemonsList() {
    return this.http.get<PokemonsList>(`${environment.pokeapi}/pokemon`);
  }

  getPokemonInfo(name: string) {
    return this.http.get<PokemonInfo>(`${environment.pokeapi}/pokemon/${name}`);
  }
}
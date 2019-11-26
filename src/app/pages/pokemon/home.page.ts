import { Component } from '@angular/core';

import { PokeApi } from '../../core/services/pokeapi.service';
import { PokemonsList } from '../../core/interfaces/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private PokeApi:PokeApi) {}

  pokemons: PokemonsList;

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.PokeApi.getPokemonsList()
      .subscribe(pokemons => {
        console.log(pokemons);
        this.pokemons = pokemons;
      });
  }

}

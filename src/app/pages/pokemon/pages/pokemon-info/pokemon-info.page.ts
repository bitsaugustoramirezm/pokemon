import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokeApi } from '../../../../core/services/pokeapi.service';
import { PokemonInfo } from '../../../../core/interfaces/pokemonInfo';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.page.html',
  styleUrls: ['./pokemon-info.page.scss'],
})
export class PokemonInfoPage implements OnInit {

  constructor(private PokeApi:PokeApi, private activatedRoute: ActivatedRoute) {}

  pokemon: PokemonInfo;
  name: string;

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params: Params) => {
      this.name = params.name;
      this.PokeApi.getPokemonInfo(name)
        .subscribe(info => {
          this.pokemon = info;
          console.log(info);
        });

    });
  }

}

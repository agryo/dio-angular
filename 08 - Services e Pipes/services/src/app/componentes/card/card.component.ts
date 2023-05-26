import { Component, OnInit } from '@angular/core';
import { PokemonDados } from 'src/app/modelos/pokemonDados';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonDados

  constructor(
    private servico:PokemonService
  ){ 
    this.pokemon = {
      id:0,
      name:'',
      sprites:{front_default:''},
      types:[]
    }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(procurarNome:string){
    this.servico.getPokemon(procurarNome).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },
        error: (err) => console.log('Não Encontrado!')
      }
    )
  }

}

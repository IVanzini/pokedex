import { Component, OnInit } from '@angular/core';
import { ModificaArticoloDto } from 'src/app/models/articolo';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-articolo-modify',
  templateUrl: './articolo-modify.component.html',
  styleUrls: ['./articolo-modify.component.css']
})
export class ArticoloModifyComponent implements OnInit {
  errorMessage = "";
  model?: ModificaArticoloDto;
  pokemons: Pokemon[] = [];

  constructor(private ps: PokemonsService) {}

  ngOnInit(): void {
    this.ps.search(20).subscribe(pokemons => {
        this.pokemons = pokemons.data;
      }
    )
  }

  getArticoloById(id: number) {

  }

  modificaArticolo() {}
}

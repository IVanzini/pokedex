import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Pokemon, SearchResponseById } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  pokemon?: Pokemon;
  subscription?: Subscription;

  constructor(private ps: PokemonsService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.searchById(id);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  searchById(id:string) {
    this.subscription = this.ps.searchById(id).subscribe(dati => {
      this.pokemon = dati.data;
      console.log(this.pokemon);
    });  
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articolo, ModificaArticoloDto } from 'src/app/models/articolo';
import { Pokemon } from 'src/app/models/pokemon';
import { BlogService } from 'src/app/services/blog.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-articolo-modify',
  templateUrl: './articolo-modify.component.html',
  styleUrls: ['./articolo-modify.component.css']
})
export class ArticoloModifyComponent implements OnInit {
  model?: ModificaArticoloDto;
  errorMessage = "";
  pokemons: Pokemon[] = [];

  constructor(private bs: BlogService, 
    private route: ActivatedRoute,
    private ps: PokemonsService,
    private router: Router) {

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.ps.search(10).subscribe(dati => {
      this.pokemons = dati.data;

      this.bs.getArticoloEditById(id).subscribe(articolo => {
        this.model = articolo;
      })
    });
  }

  modificaArticolo() {
    this.bs.modifyArticoloById(this.model!.id, this.model!).subscribe(articolo => {
      this.router.navigate(["blog"]);
    });
  }
}

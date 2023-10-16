import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Articolo } from 'src/app/models/articolo';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articoli-list',
  templateUrl: './articoli-list.component.html',
  styleUrls: ['./articoli-list.component.css']
})
export class ArticoliListComponent implements OnInit {
  articoli: Articolo[] = [];
  errorMessage = "";
  constructor(private bs: BlogService) {
    
  }
  ngOnInit(): void {
    // this.bs.getArticoli().subscribe(articoli => {
    //   console.log(articoli);
    // });
    //alternativa 1
    this.bs.getArticoli()
    .pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status == 401) {
          this.errorMessage = "Non si dispone delle autorizzazioni necessarie per visualizzare gli articoli: "+err.error; 
        } else {
          this.errorMessage = "Errore nel caricamento degli articoli";
        }

        return of([] as Articolo[]);
      })
    )
    .subscribe(articoli => {
      this.articoli = articoli;
    });
    //alternativa 2
    // this.bs.getArticoli().subscribe({
    //   next: articoli => this.articoli = articoli,
    //   error: (err: HttpErrorResponse) => {
    //     if (err.status == 401) {
    //       this.errorMessage = "Non si dispone delle autorizzazioni necessarie per visualizzare gli articoli: " + err.error;
    //     } else {
    //       this.errorMessage = "Errore nel caricamento degli articoli";
    //     }
    //   }
    // })
  }
}



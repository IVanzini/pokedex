import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { gestisciErrore } from './utilities';
import { Articolo } from '../models/articolo';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getArticoli() :Observable<Articolo[]> {
    return this.http.get<Articolo[]>(environment.JSON_SERVER_BASE_URL + "/articoli")
    .pipe(
      catchError(gestisciErrore<Articolo[]>("getarticoli", []))
    )
  }
}

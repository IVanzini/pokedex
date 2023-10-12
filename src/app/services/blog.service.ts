import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { gestisciErrore } from './utilities';
import { Articolo } from '../models/articolo';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(private http: HttpClient,
    private authService: AuthService) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
    })
  }

  getArticoli() :Observable<Articolo[]> {
    return this.http.get<Articolo[]>(environment.JSON_SERVER_BASE_URL + "/articoli", this.httpOptions)
    .pipe(
      catchError(gestisciErrore<Articolo[]>("getarticoli", []))
    )
  }
}

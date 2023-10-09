import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Pokemon, SearchResponse, SearchResponseById } from '../models/pokemon';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private baseUrl = environment.POKEMON_SERVER_BASE_URL;

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "X-Api-Key": environment.POKEMON_SERVER_API_KEY
    })
  }

  search(pageSize: number = environment.POKEMON_SEARCH_DEFAULT_PAGE_SIZE, page: number = 1):Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`${this.baseUrl}/cards?pageSize=${pageSize}&page=${page}`, this.httpOptions)
    .pipe(
      catchError(this.gestisciErrore<SearchResponse>("search pokemons:", undefined))
    );
  }

  searchById(id:string):Observable<SearchResponseById> {
    return this.http.get<SearchResponseById>(`${this.baseUrl}/cards/${id}`, this.httpOptions)
    .pipe(
      catchError(this.gestisciErrore<SearchResponseById>("get by Id pokemon:", undefined))
    );
  }

  gestisciErrore<T>(operazione = "operazione", risultato?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.log(operazione, error.message);
      return of(risultato as T);
    }
  }
}

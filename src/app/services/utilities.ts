import { Observable, of} from 'rxjs';
import { HttpErrorResponse} from '@angular/common/http';

export function gestisciErrore<T>(operazione = "operazione", risultato?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.log(operazione, error.message);
      return of(risultato as T);
    }
  }
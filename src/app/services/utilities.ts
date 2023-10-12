import { Observable, of} from 'rxjs';
import { HttpErrorResponse} from '@angular/common/http';

export function gestisciErrore<T>(operazione = "operazione", risultato?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.log("*** " + operazione + "***");
      console.log(error.error);
      console.log(error.message);
      console.log("*** " + operazione + "***");
      return of(risultato as T);
    }
  }
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const loggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  if (!authService.isUserLogged) {
    router.navigate(['/login']);
    snackBar.open("La visualizzazione del blog richiede l'autenticazione");
    return false;
  }
  return true;

  //return inject(AuthService).isUserLogged;
 
};

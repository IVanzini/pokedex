import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { LoginDTO } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent {
  errorMessage = "";

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
    password: ["", [Validators.required]]
  });

  login() {
    this.authService.login(this.loginForm.value as LoginDTO)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;

          return of(undefined);
        })
      )
      .subscribe(loggedUser => {
        if (loggedUser) {
          this.authService.setLoggedUser(loggedUser);
          this.router.navigate(["/"]);
        }
      });
  }


}


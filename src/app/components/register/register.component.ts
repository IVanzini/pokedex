import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDTO } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model = new RegisterDTO();

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.model).subscribe(loggedUser => {
      if (!loggedUser) {
        console.log("Errore durante la registrazione");
      } else {
        this.authService.setLoggedUser(loggedUser);
        this.router.navigate(["/"]);
      }
    });
  }

}
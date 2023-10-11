import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO} from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = new LoginDTO();

  constructor(private authService: AuthService,
    private router: Router) {

  }

  login() {
    this.authService.login(this.model).subscribe(loggedUser => {
      if (!loggedUser) {
        console.log("Errore durante il login");
      } else {
        this.authService.setLoggedUser(loggedUser);
        this.router.navigate(["/"]);
      }


    });
  }
}

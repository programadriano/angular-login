import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router: Router, private loginService: LoginService) { }

  logOn(user, password) {

    this.loginService.logOn(user, password)
      .subscribe(
      login => this.processarLogin(login),
      error => this._processaError(error));
  }

  processarLogin(login: any) {
    console.log('USUARIO', login);
    localStorage['token'] = login.token;
    this.router.navigate(['/']);
  }

  _processaError(error: any) {
    alert('Usuário ou senha invalidos!')
    console.log(error);
  }

}

import { ApiService } from 'src/service/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/service/login.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InscriptionComponent } from '../inscription/inscription.component';
import { AppComponent } from 'src/app/app.component';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() pageChange = new EventEmitter<string>();
  email: string;
  mdp: string;
  message: string;

  constructor(apiService: ApiService, private loginService: LoginService, private http: HttpClient, private router: Router, private app: AppComponent) {
    this.email = '';
    this.mdp = '';
    this.message = '';
  }
  ngOnInit(): void {}
  async onSubmit(form: NgForm){
   // let hashed = crypto.SHA256(this.mdp).toString();
    this.loginService.login(this.email, this.mdp).pipe(
      catchError(err => {
        console.log("test test test");
        this.message = err.error.message;
          return (err);
      })
    ).subscribe((response) => {
      // check if the response contains a token
      if (response.hasOwnProperty('token')) {
        // save the token to session storage
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('idUser',response.idUser);
        sessionStorage.setItem('role',response.role);
        // redirect to another page
        console.log(response.role);
        // emit event to change the current page
        this.pageChange.emit('home');
        console.log(this.app.currentPage);
      }

    });
  }
  async redirect(page: string){
    this.pageChange.emit(page);
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ApiService } from 'src/service/api.service';
import { InscriptionService } from 'src/service/inscription.service';
import * as crypto from 'crypto-js';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  @Output() pageChange = new EventEmitter<string>();
  email: string;
  mdp: string;
  nom: string;
  message: string;
  messageLog: string;

  constructor(apiService: ApiService, private inscriptionService: InscriptionService, private http: HttpClient, private router: Router, private app: AppComponent) {
    this.email = '';
    this.mdp = '';
    this.nom = '';
    this.message='';
    this.messageLog= '';
  }
  async redirect(page: string) {
    this.pageChange.emit(page);
  }
  async register(form: NgForm) {
     let hashed = crypto.SHA256(this.mdp).toString();
    this.inscriptionService.register(this.email, this.mdp,this.nom).pipe(
      catchError(err => {
        console.log("test test test");  
        this.message = err.error.message;
        return (err);
      })
    ).subscribe((response) => {
      // check if the response contains a token
      if (response.hasOwnProperty('registered')) {
        // redirect to another page
        // emit event to change the current page
        this.pageChange.emit('login');
        this.messageLog="Vous avez bien été inscrit!";
        console.log("le nouvel utilisateur a été enregistré");
      }
    });
  }
}

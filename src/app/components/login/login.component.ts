import { ApiService } from 'src/service/api.service';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  mdp: string;
  message: string;
  constructor(apiService: ApiService, private loginService: LoginService) {
    console.log(apiService.get(''));
    this.email = '';
    this.mdp = '';
    this.message = '';
  }
  ngOnInit(): void {
  }
  async onSubmit(form: NgForm){
    // this.message = this.loginService.login(this.email, this.mdp); nisy erreur dia ncommenteko kely aloha
  }


}

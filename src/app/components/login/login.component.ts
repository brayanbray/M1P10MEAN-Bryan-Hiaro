import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  error: string;
  constructor(apiService : ApiService) {
    console.log(apiService.get(''));
    this.email = '';
    this.password = '';
    this.error = '';
  }

}

import { Component } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(apiService : ApiService) {
    console.log(apiService.get(''));
  }

}

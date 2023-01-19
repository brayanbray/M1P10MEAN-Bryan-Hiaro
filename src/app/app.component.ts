import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService,public apiService: ApiService) {}

  title = 'm1p10mean-bryan-hiaro';
  currentPage = 'home';
  showHome = this.currentPage == 'home';
  showLogin = this.currentPage == 'login';
  
  onDataEvent(data: string) {
    this.currentPage = data == 'home' ? data : 'login'
    this.showHome = this.currentPage == 'home'
    this.showLogin = this.currentPage == 'login'
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.apiService.get('').subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }
}

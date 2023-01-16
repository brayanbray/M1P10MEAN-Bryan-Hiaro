import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {}

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
}

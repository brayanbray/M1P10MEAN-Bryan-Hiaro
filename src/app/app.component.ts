import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public authService: AuthService, public apiService: ApiService) {}
  currentPage = 'home';
  showHome = this.currentPage == 'home';
  showLogin = this.currentPage == 'login';
  showInscription = this.currentPage == 'inscription';

  ngOnInit() {
    this.apiService
      .get('utilisateurs/nom/Hiaro Nathanael')
      .subscribe((data) => localStorage.setItem('userId', data._id));
  }

  // onDataEvent(data: string) {
  //   this.currentPage = data == 'home' ? data : 'login'
  //   this.showHome = this.currentPage == 'home'
  //   this.showLogin = this.currentPage == 'login'
  //   this.showInscription = this.currentPage == 'inscription'

  //         (dataEvent)="onDataEvent($event)" in view
  // }
  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}

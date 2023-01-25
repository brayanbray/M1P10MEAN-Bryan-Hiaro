import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public authService: AuthService, public apiService: ApiService) {}
  // title = 'm1p10mean-bryan-hiaro';
  currentPage = 'login';
  showHome = this.currentPage == 'home';
  showLogin = this.currentPage == 'login';
  showInscription = this.currentPage == 'inscription';

  ngOnInit() {
    // this.apiService
    //   .get('utilisateurs/nom/Hiaro Nathanael')
    //   .subscribe((data) => localStorage.setItem('userId', data._id));
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

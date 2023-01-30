<<<<<<< Updated upstream
import { Component } from '@angular/core';
import { AuthService } from '../controller/auth.service';
import { ApiService } from '../controller/api.service';
=======
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { Component, EventEmitter, Output } from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< Updated upstream
  constructor(public authService: AuthService,public apiService: ApiService) {}

  title = 'm1p10mean-bryan-hiaro';
=======
  @Output() pageChange = new EventEmitter<string>();
  // title = 'm1p10mean-bryan-hiaro';
>>>>>>> Stashed changes
  currentPage = 'login';
  showHome = this.currentPage == 'home';
  showLogin = this.currentPage == 'login';
  showInscription = this.currentPage == 'inscription';

<<<<<<< Updated upstream
  
  onDataEvent(data: string) {
    this.currentPage = data == 'home' ? data : 'login'
    this.showHome = this.currentPage == 'home'
    this.showLogin = this.currentPage == 'login'
    this.showInscription = this.currentPage == 'inscription'
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  // ngOnInit() {
  //   this.apiService.get('').subscribe(data => {
  //     console.log(JSON.stringify(data));
  //   });
=======
  constructor(public authService: AuthService, public apiService: ApiService) {}
  ngOnInit() {
  }

  changePage(pageName: string) {
    this.currentPage = pageName;
    this.showHome = this.currentPage == 'home';
    this.showLogin = this.currentPage == 'login';
    this.showInscription = this.currentPage == 'inscription';
    this.pageChange.emit(pageName);
  }
  // onDataEvent(data: string) {
  //   this.currentPage = data == 'home' ? data : 'login'
  //   this.showHome = this.currentPage == 'home'
  //   this.showLogin = this.currentPage == 'login'
  //   this.showInscription = this.currentPage == 'inscription'

  //         (dataEvent)="onDataEvent($event)" in view
>>>>>>> Stashed changes
  // }
}

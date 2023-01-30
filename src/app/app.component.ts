<<<<<<< HEAD
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { Component, EventEmitter, Output } from '@angular/core';
=======
import { Component } from '@angular/core';
import { AuthService } from '../controller/auth.service';
import { ApiService } from '../controller/api.service';
>>>>>>> parent of 1176314 (login inscription)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
<<<<<<< HEAD
<<<<<<< HEAD
  @Output() pageChange = new EventEmitter<string>();
  // title = 'm1p10mean-bryan-hiaro';
=======
  constructor(public authService: AuthService,public apiService: ApiService) {}

  title = 'm1p10mean-bryan-hiaro';
>>>>>>> parent of 1176314 (login inscription)
  currentPage = 'login';
  showHome = this.currentPage == 'home';
  showLogin = this.currentPage == 'login';
  showInscription = this.currentPage == 'inscription';

<<<<<<< HEAD
  constructor(public authService: AuthService, public apiService: ApiService) {}
  ngOnInit() {
=======
  constructor(public authService: AuthService,public apiService: ApiService) {}

  title = 'm1p10mean-bryan-hiaro';
  currentPage = 'home';
  showHome = this.currentPage == 'home';
  showLogin = this.currentPage == 'login';
=======
>>>>>>> parent of 1176314 (login inscription)
  
  onDataEvent(data: string) {
    this.currentPage = data == 'home' ? data : 'login'
    this.showHome = this.currentPage == 'home'
    this.showLogin = this.currentPage == 'login'
<<<<<<< HEAD
>>>>>>> parent of 2262573 (login et inscription)
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

<<<<<<< HEAD
  //         (dataEvent)="onDataEvent($event)" in view
=======
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
>>>>>>> parent of 1176314 (login inscription)
  // }
=======
  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.apiService.get('').subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }
>>>>>>> parent of 2262573 (login et inscription)
}

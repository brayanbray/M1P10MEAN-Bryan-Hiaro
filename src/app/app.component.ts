import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
<<<<<<< HEAD
  @Output() pageChange = new EventEmitter<string>();
  // title = 'm1p10mean-bryan-hiaro';
  currentPage = 'login';
  showHome = this.currentPage == 'home';
  showLogin = this.currentPage == 'login';
  showInscription = this.currentPage == 'inscription';

  constructor(public authService: AuthService, public apiService: ApiService) {}
  ngOnInit() {
=======
  constructor(public authService: AuthService,public apiService: ApiService) {}

  title = 'm1p10mean-bryan-hiaro';
  currentPage = 'home';
  showHome = this.currentPage == 'home';
  showLogin = this.currentPage == 'login';
  
  onDataEvent(data: string) {
    this.currentPage = data == 'home' ? data : 'login'
    this.showHome = this.currentPage == 'home'
    this.showLogin = this.currentPage == 'login'
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

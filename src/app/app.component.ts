import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Output() pageChange = new EventEmitter<string>();
  // title = 'm1p10mean-bryan-hiaro';
  currentPage = 'login';
  showHome = this.currentPage == 'home';
  showLogin = this.currentPage == 'login';
  showInscription = this.currentPage == 'inscription';

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
  // }
}

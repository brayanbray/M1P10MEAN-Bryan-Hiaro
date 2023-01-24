import { Input } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() userId: string = '';
  // @Output() DataEvent = new EventEmitter<string>();
  // @Output() currPage = new EventEmitter<string>();
  currentPage = 'statistique';

  ngOnInit() {
    
  }

  onClickVoiture() {
    this.currentPage = 'voiture';
  }

  onClickStats() {
    this.currentPage = 'statistique';
  }

  // onDataEvent(data: string) {
  //   this.currentPage = data == 'home' ? data : 'login'
  //   this.showHome = this.currentPage == 'home'
  //   this.showLogin = this.currentPage == 'login'
  //   this.showInscription = this.currentPage == 'inscription'

  // (dataEvent)="onDataEvent($event)" in view
  // }
}

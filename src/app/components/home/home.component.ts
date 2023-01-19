import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() dataEvent = new EventEmitter<string>();
  data = 'login';
  onButtonClick() {
    this.dataEvent.emit(this.data);
  }
}
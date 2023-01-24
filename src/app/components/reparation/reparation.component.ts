import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.css']
})
export class ReparationComponent {
  userId: string | null = '';
  reparations : any[] = [];
  constructor(private apiService: ApiService) {
    
  }

  ngAfterViewInit() {
    this.userId = localStorage.getItem('userId') == null ? null : localStorage.getItem('userId');
    this.apiService.get('reparations').subscribe(data => {
      this.reparations = data;
    });
  }
}

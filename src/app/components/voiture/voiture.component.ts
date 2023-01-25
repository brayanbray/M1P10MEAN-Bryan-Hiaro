import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  userId: string | null = '';
  voitures : any[] = [];
  constructor(private apiService: ApiService) {
    
  }

  ngAfterViewInit() {
    this.userId = localStorage.getItem('userId') == null ? null : localStorage.getItem('userId');
    this.apiService.get('utilisateur/voitures/'+this.userId).subscribe(data => {
      this.voitures = data;
    });
  }
}

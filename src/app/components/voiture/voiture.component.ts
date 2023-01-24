import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  @Input() userId: string = '';
  voitures : any[] = [];
  constructor(private apiService: ApiService) {
    
  }

  ngAfterViewInit() {
    console.log('user = '+this.userId);
    this.apiService.get('utilisateur/voitures/'+this.userId).subscribe(data => {
      this.voitures = data;
    });
  }
}

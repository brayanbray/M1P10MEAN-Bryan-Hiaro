import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.css'],
})
export class ReparationComponent {
  userId: string | null = '';
  reparations: any[] = [];
  constructor(private apiService: ApiService) {}

  ngAfterViewInit() {
    this.userId =
      localStorage.getItem('userId') == null
        ? null
        : localStorage.getItem('userId');
    this.apiService.get('reparations').subscribe((data) => {
      this.reparations = data;
      this.reparations.forEach((e) => {
        let totalRepairs = e.details.length;
        let repairsFinished = 0;
        e.details.forEach((element: { statut: string }) => {
          if (element.statut == 'Fini') repairsFinished++;
        });
        e.percent = (repairsFinished * 100) / totalRepairs;
        if (e.percent >= 75) e.color = 'success';
        else if (e.percent > 25 && e.percent < 75) e.color = 'warning';
        else e.color = 'danger';
        if (e.percent == 0) e.percent = 10; 
        e.percent = e.percent + '%';
      });
    });
  }

  getClass(param: string) {
    return 'progress-bar bg-'+param;
  }

  onShowDetails() {
    alert('CLICK');
    // console.log(JSON.stringify(event));
  }
}

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
  repairs: any[] = [];
  details: any[] = [];
  voiture: any = {};
  space = '    ';

  constructor(private apiService: ApiService) {}

  ngAfterViewInit() {
    this.userId =
      localStorage.getItem('userId') == null
        ? null
        : localStorage.getItem('userId');
    this.apiService.get('reparations').subscribe((data) => {
      this.reparations = data;
      this.repairs = data;
      this.reparations.forEach((e) => {
        let totalRepairs = e.details.length;
        let repairsFinished = 0;
        e.details.forEach((element: { statut: string }) => {
          if (element.statut == 'Fini') repairsFinished++;
        });
        e.percent = (repairsFinished * 100) / totalRepairs;
        if (e.percent > 75) e.color = 'success';
        else if (e.percent >= 25 && e.percent <= 75) e.color = 'warning';
        else e.color = 'danger';
        if (e.percent == 0) e.percent = 10;
        e.percent = e.percent + '%';
      });
      this.setDetail(this.reparations[0]._id);
    });
  }

  setDetail(repair: String) {
    let index = this.reparations.map((e) => e._id).indexOf(repair);
    this.details = this.reparations[index].details;
    this.details.forEach((e) => {
      if (e.statut == 'En attente') e.class = 'btn btn-xs btn-outline-danger';
      else if (e.statut == 'En cours')
        e.class = 'btn btn-xs btn-outline-warning';
      else e.class = 'btn btn-xs btn-outline-success';
    });
    this.voiture = this.reparations[index].voiture;
  }

  getClass(param: string) {
    return 'progress-bar bg-' + param;
  }

  onShowDetails(id: string) {
    this.setDetail(id);
  }
}

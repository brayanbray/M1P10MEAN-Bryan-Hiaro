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
  total: Number = 0;
  repair: String = '';
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
    this.total = 0;
    this.details.forEach((e) => {
      if (e.statut == 'En attente') e.class = 'btn btn-xs btn-outline-danger';
      else if (e.statut == 'En cours')
        e.class = 'btn btn-xs btn-outline-warning';
      else e.class = 'btn btn-xs btn-outline-success';
      this.total += e.montant;
      e.affiche = false;
      e.next = undefined;
      console.log(e._id);
      if (e.statut == 'En attente') e.next = 'En cours';
      else if (e.statut == 'En cours') e.next = 'Fini';
    });
    this.repair = repair;
    this.voiture = this.reparations[index].voiture;
  }

  onAjout(id: String, desc: string, montant: Number) {
    this.apiService
      .post('reparation/addDetail', {
        id: id,
        description: desc,
        montant: montant,
      })
      .subscribe((data) => {
        let index = this.reparations.map((e) => e._id).indexOf(data._id);
        this.reparations[index] = data;
        this.setDetail(data._id);
      });
  }

  clickStatus(id: String) {
    let index = this.details.map((e) => e._id).indexOf(id);
    let temp = this.details.filter((e) => e._id == id)[0];
    temp.affiche = true;
    this.details[index] = temp;
  }

  async next(idP: String, id: String, next: String) {
    const body = {
      id:idP,
      _id:id,
      next:next
    }
    await this.apiService.post('reparation/setDetailStatus',body).subscribe(d=>{
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
        this.setDetail(this.reparations[this.reparations.map(e=>e._id).indexOf(idP)]._id);
      });
    });
  }

  annuler(idP: String) {
    this.setDetail(idP);
  }

  getClass(param: string) {
    return 'progress-bar bg-' + param;
  }

  onShowDetails(id: string) {
    this.setDetail(id);
  }
}

import { Component, Inject } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AjoutDetailModalComponent } from '../ajout-detail-modal/ajout-detail-modal.component';
import { ConfirmerSortieComponent } from '../confirmer-sortie/confirmer-sortie.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.css'],
})
export class ReparationComponent {
  userId: string | null = '';
  reparations: any[] = [];
  details: any[] = [];
  voiture: any = {};
  total: Number = 0;
  repair: String = '';
  space = '    ';
  validable : undefined | boolean;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private dialogConfig: MatDialogConfig,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { }

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
        if (e.percent > 75) e.color = 'success';
        else if (e.percent >= 25 && e.percent <= 75) e.color = 'warning';
        else e.color = 'danger';
        if (e.percent == 0) e.percent = 10;
        e.percent = e.percent + '%';
      });
      this.setDetail(this.reparations[0]._id);
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (!event.isPointerOverContainer ) {
      this.setDetail(this.reparations[event.previousIndex]._id);
    }
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
      if (e.statut == 'En attente') e.next = 'En cours';
      else if (e.statut == 'En cours') e.next = 'Fini';
    });
    this.repair = repair;
    this.voiture = this.reparations[index].voiture;
    this.validable = undefined;
    if (this.voiture.statut == 'En réparation' && this.details.map(e => e.statut).every( e => e == 'Fini')) this.validable = true;
  }

  async validerSorti(id: String,rep:String) {
    await this.apiService.put('voitures/sortie/id=' + id, {id:rep}).subscribe((d) => {
      this.apiService.get('reparations').subscribe((data) => {
        this.reparations = data;
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
        this.setDetail(
          this.reparations[this.reparations.map((e) => e._id).indexOf(this.repair)]._id
        );
      });
    });
  }

  async showModal(idid: String) {
    this.details.forEach(element => element.affiche = false);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.direction = 'ltr';
    const dialogRef = this.dialog.open(AjoutDetailModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(async (data) => {
      if (data) {
        await this.onAjout(idid,data.description,data.montant);
      }
    });
  }
  
  async showConfirmation(idid: String,rep:String) {
    this.details.forEach(element => element.affiche = false);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ConfirmerSortieComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(async (data) => {
      if (data.confirm) {
        await this.validerSorti(idid,rep);
      }
    });
  }

  async onAjout(id: String, desc: string, montant: Number) {
    await this.apiService
      .post('reparation/addDetail', {
        id: id,
        description: desc,
        montant: montant,
      })
      .subscribe((data) => {
        this.apiService.get('reparations').subscribe((data) => {
          this.reparations = data;
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
        });
        let index = this.reparations.map((e) => e._id).indexOf(data._id);
        this.reparations[index] = data;
        this.setDetail(data._id);
      });
  }

  clickStatus(id: String) {
    this.details.forEach(element => element.affiche = false);
    let index = this.details.map((e) => e._id).indexOf(id);
    let temp = this.details.filter((e) => e._id == id)[0];
    temp.affiche = true;
    this.details[index] = temp;
  }

  async next(idP: String, id: String, next: String) {
    const body = {
      id: idP,
      _id: id,
      next: next,
    };
    await this.apiService
      .post('reparation/setDetailStatus', body)
      .subscribe((d) => {
        this.apiService.get('reparations').subscribe((data) => {
          this.reparations = data;
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
          this.setDetail(
            this.reparations[this.reparations.map((e) => e._id).indexOf(idP)]
              ._id
          );
        });
      });
  }

  annuler(idP: String) {
    this.setDetail(idP);
  }

  getClass(param: string) {
    return 'progress-bar bg-' + param;
  }
}

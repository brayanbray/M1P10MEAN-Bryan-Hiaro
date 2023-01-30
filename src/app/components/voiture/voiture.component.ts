import { Component, Inject } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DeposerComponent } from '../deposer/deposer.component';
import { ModalVoitureComponent } from '../modal-voiture/modal-voiture.component';
@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css'],
})
export class VoitureComponent {
  userId: string | null = '';
  voitures: any[] = [];
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private dialogConfig: MatDialogConfig,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {}

  ngAfterViewInit() {
    this.userId =
      localStorage.getItem('userId') == null
        ? null
        : localStorage.getItem('userId');
    // this.apiService
    //   .get('utilisateur/voitures/' + this.userId)
    //   .subscribe((data) => {
    //     this.voitures = data;
    //   });

    this.apiService.get('voitures').subscribe((data) => {
      this.voitures = data;
    });
    this.apiService.get('utilisateurs/nom/Hiaro Nathanael').subscribe((data) => {
      this.userId = data._id;
    });
  }

  ajouterVoiture() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ModalVoitureComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(async (data) => {
      if (data.confirm) {
        await this.apiService
          .post('voitures/add',{
            modele:data.modele,
            marque:data.marque,
            immatriculation:data.immatriculation,
            utilisateur:this.userId,
            statut:'Disponible',
          })
          .subscribe((d) => {
            this.apiService.get('voitures').subscribe((daat) => {
              this.voitures = daat;
            });
          });
      }
    });
  }

  async deposer(idid: String, stt: String) {
    if (stt == 'Disponible') {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(DeposerComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(async (data) => {
        if (data.confirm) {
          await this.apiService
            .put('voitures/depot/id=' + idid, {})
            .subscribe((d) => {
              this.apiService.get('voitures').subscribe((data) => {
                this.voitures = data;
              });
            });
        }
      });
    }
  }
}

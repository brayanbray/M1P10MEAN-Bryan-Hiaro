import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-voiture',
  templateUrl: './modal-voiture.component.html',
  styleUrls: ['./modal-voiture.component.css']
})
export class ModalVoitureComponent {
  
  immatriculation = '';
  marque = '';
  modele = '';
  constructor(public dialogRef: MatDialogRef<ModalVoitureComponent>) {

  }  
  close() {
      this.dialogRef.close();
  }
  save() {
    this.dialogRef.close({
      immatriculation: this.immatriculation,
      modele: this.modele,
      marque: this.marque,
      confirm: true,
    })
  }
}
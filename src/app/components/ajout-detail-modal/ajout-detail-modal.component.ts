import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ajout-detail-modal',
  templateUrl: './ajout-detail-modal.component.html',
  styleUrls: ['./ajout-detail-modal.component.css'],
})
export class AjoutDetailModalComponent {
  description = '';
  montant = 0;
  constructor(public dialogRef: MatDialogRef<AjoutDetailModalComponent>) {}

  ngOnInit() {}

  close() {
      this.dialogRef.close();
  }
  save() {
    this.dialogRef.close({
      description: this.description,
      montant: this.montant
    })
  }
}
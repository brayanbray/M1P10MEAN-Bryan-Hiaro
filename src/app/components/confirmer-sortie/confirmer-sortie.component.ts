import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmer-sortie',
  templateUrl: './confirmer-sortie.component.html',
  styleUrls: ['./confirmer-sortie.component.css']
})
export class ConfirmerSortieComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmerSortieComponent>) {

  }

  close() {
      this.dialogRef.close();
  }
  save() {
    this.dialogRef.close({
      confirm: true,
    })
  }
}
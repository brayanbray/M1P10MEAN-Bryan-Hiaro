import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deposer',
  templateUrl: './deposer.component.html',
  styleUrls: ['./deposer.component.css']
})
export class DeposerComponent {
  
  constructor(public dialogRef: MatDialogRef<DeposerComponent>) {

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

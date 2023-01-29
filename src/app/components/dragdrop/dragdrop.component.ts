import {Component} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent {
  con = 'NON';
  todo = [{n:'Get to work',id:0}, {n:'Pick up groceries',id:0}, {n:'Go home',id:0}, {n:'Fall asleep',id:0}];

  drop(event: CdkDragDrop<any[]>) {
    console.log(event.isPointerOverContainer);
    console.log(event.container.data);
  }
}

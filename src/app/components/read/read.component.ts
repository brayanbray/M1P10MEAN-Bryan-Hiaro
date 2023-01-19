import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  @Input() endpoint: string = '';
  @Input() propertiesName : string[] = [];
  items : any[] | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get(this.endpoint).subscribe((data) => {
      this.items = data;
      alert(data);
    });
  }
}
import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  @Input() item: any = {};
  @Input() endpoint: string = '';
  @Input() propertiesName : string[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  onSubmit() {
    this.apiService.post(this.endpoint, this.item).subscribe((response) => {
      console.log(response);
    });
  }
}

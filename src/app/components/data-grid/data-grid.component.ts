import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input () artifactId: number;
  @Input() gridConfiguration : any;
  
  constructor(private http: HttpClient) { 
    if(this.artifactId) {
      console.log(this.artifactId);
    }
  }

  ngOnInit() {
    
  }

}

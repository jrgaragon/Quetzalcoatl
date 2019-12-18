import {Component, OnInit, Input, EventEmitter, SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({selector: 'app-data-grid', templateUrl: './data-grid.component.html', styleUrls: ['./data-grid.component.css']})
export class DataGridComponent implements OnInit {

    @Input()artifactId : number;
    @Input()gridConfiguration : any;

    dataGrid: any;    

    constructor(private http : HttpClient) {
        
    }

    ngOnInit() {}

    ngOnChanges(changes : SimpleChanges) {
        console.log(changes);
        if (changes.artifactId.currentValue) {
            this.http.post('https://lookupapi.getsandbox.com:443/getLookupDataById', {lookupId: changes.artifactId.currentValue}).subscribe(response => {
                this.dataGrid = response;
            });
        }
        console.log(this.gridConfiguration);
    }
}

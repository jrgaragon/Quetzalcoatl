import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quetzalcoatl';
  artifactId: number;
  gridConfiguration: any;

  constructor() {
    this.gridConfiguration = {
      columns: [
        {
          name: 'test',
          type: 'dropdown',
          values: ['val1', 'val2','val3', 'default']
        },
        {
          name: 'second',
          type: 'text'
        },
        {
          type: 'input'
        },
        {
          type: 'text'
        }
      ]      
    };
  }

  artifactSelected(artifactId: number){
    console.log("app.component: " + artifactId);
    this.artifactId = artifactId;
  }
}

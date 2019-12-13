import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quetzalcoatl';
  artifactId: number;

  artifactSelected(artifactId: number){
    console.log("app.component: " + artifactId);
    this.artifactId = artifactId;
  }
}

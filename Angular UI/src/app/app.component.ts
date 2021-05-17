import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  title = 'anuglar-node-backend';

  handleResults(jsonData: any) {
    this.data = jsonData;
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Status Reporter';

  private chartData: Array<any>;

  constructor() { }
}
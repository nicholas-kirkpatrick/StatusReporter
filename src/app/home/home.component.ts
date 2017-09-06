import { Component } from '@angular/core';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    title = 'Status Reporter';
    
    private chartData: Array<any>;
    
    constructor() {}
    
    ngOnInit() {
      //give everything a chance to get loaded before starting animation to reduce choppiness
      setTimeout(() => {
        this.generateData();
      }, 1000);
    }
    
    generateData() {
      this.chartData = [];
      for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
        this.chartData.push([
          `Index ${i}`,
          Math.floor(Math.random() * 100)
        ]);
      }
    }
}
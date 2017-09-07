import { Component } from '@angular/core';

@Component({
  selector: 'scope-chart',
  templateUrl: './scope-chart.component.html'
})
export class ScopeChartComponent {
  // lineChart
  public lineChartData: Array<any> = [
    { data: [90, 98, 80, 78, 68, 55], label: 'Hours Remaining' },
    { data: [90, 80, 70, 60, 50, 40, 30, 20, 10, 0], label: 'Ideal Effort Hour' }
  ];
  public lineChartLabels: Array<any> = ['Aug. 4', 'Aug. 11', 'Aug. 18', 'Aug. 25', 'Sep. 1', 'Sep. 8', 'Sep. 15', 'Sep 22', 'Sep. 29', 'Oct. 6'];
  public lineChartOptions: any = {
    title: {
      display: true,
      fontSize: 18,
      position: "top",
      text: "Scope Burndown"
    },
    responsive: true
  };

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
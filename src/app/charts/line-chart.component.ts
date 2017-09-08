import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'line-chart',
    templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {
    // lineChart
    public lineChartData: Array<any>;
    public lineChartLabels: Array<any>;
    public lineChartOptions: any;
    public lineChartLegend: boolean;
    public lineChartType: string;

    ngOnInit() {
        //populate the data
        this.lineChartData = [
            { data: [90, 98, 80, 78, 68, 55], label: 'Hours Remaining' },
            { data: [90, 80, 70, 60, 50, 40, 30, 20, 10, 0], label: 'Ideal Effort Hour' }
        ];
        this.lineChartLabels = ['Aug. 4', 'Aug. 11', 'Aug. 18', 'Aug. 25', 'Sep. 1', 'Sep. 8', 'Sep. 15', 'Sep 22', 'Sep. 29', 'Oct. 6'];

        //populate the options
        this.lineChartOptions = {
            title: {
                display: true,
                fontSize: 18,
                position: "top",
                text: "Graph Title"
            },
            responsive: true
        };

        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
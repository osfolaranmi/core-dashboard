import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 58, 72, 23, 90, 68, 54], label: 'Fall Sales'},
  { data: [56, 85, 27, 32, 60, 40, 45], label: 'Winter Sales'}
];

const SAMPLE_BARCHART_LABELS: string[] = [
  'W1', 'W2', 'W3', 'W4', 'W5', 'W6','W7'
]

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: any[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticaLines: false,
    responsive: true
  }

  ngOnInit() {
  }

}

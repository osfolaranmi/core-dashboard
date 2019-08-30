import { SAMPLE_LINECHART_COLOR } from './../../shared/chart.colors';
import { Component, OnInit } from '@angular/core';


const SAMPLE_LINECHART_DATA: any[] = [
  { data: [65, 58, 72, 23, 30, 68, 54], label: 'Fall Sales'},
  { data: [56, 85, 27, 32, 60, 40, 45], label: 'Winter Sales'},
  { data: [46, 75, 47, 52, 50, 60, 45], label: 'Autum Sales'}
];

const SAMPLE_LINECHART_LABELS: string[] = [
  'W1', 'W2', 'W3', 'W4', 'W5', 'W6','W7'
];



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData = SAMPLE_LINECHART_DATA;
  public lineChartLabels = SAMPLE_LINECHART_LABELS;
 
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend= true;
  public lineChartType= 'line';
  public lineChartColors = SAMPLE_LINECHART_COLOR


  ngOnInit() {
  }

}

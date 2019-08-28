import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [350, 450, 120];
  pieChartLabels: string[] = ['A', 'B', 'C'];
  colors: any[] = [
    {
      backgroundColor: ['#126fa2', '#a1722e', '#bb23a1']
    }
  ];
  pieChartType = 'doughnut';


  ngOnInit() {
  }

}

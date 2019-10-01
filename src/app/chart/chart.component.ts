import { Component, OnInit } from '@angular/core';
import { lightningChart } from '@arction/lcjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Create chartXY
    const chart = lightningChart().ChartXY();
    // Set chart title
    chart.setTitle('Getting Started');
    // Add line series to the chart
    const lineSeries = chart.addLineSeries();
    // Set stroke style of the line
    lineSeries.setStrokeStyle((style) => style.setThickness(5));
    // Add data point to the line series
    lineSeries.add([
      { x: 0, y: 0 },
      { x: 1, y: 7 },
      { x: 2, y: 3 },
      { x: 3, y: 10 }
    ]);
  }
}

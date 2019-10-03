import { Component, OnInit, Input, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { lightningChart, ChartXY, Point, LineSeries } from '@arction/lcjs';

@Component({
  selector: 'app-chart',
  template: '<div [id]="this.id"></div>',
  styles: ['div { height: 100% }']
})

export class ChartComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  chart: ChartXY;
  lineSeries: LineSeries;
  id: number;

  @Input() points: Point[];

  constructor() {}

  ngOnChanges() {
    // Generate random ID to us as the containerId for the chart and the target div id
    this.id = Math.trunc(Math.random() * 1000000);
  }

  ngOnInit() {
    console.log('The component is initialized')
  }

  ngAfterViewInit() {
    // Create chartXY
    this.chart = lightningChart().ChartXY({containerId: `${this.id}`});
    // Set chart title
    this.chart.setTitle('Getting Started');
    // Add line series to the chart
    this.lineSeries = this.chart.addLineSeries();
    // Set stroke style of the line
    this.lineSeries.setStrokeStyle((style) => style.setThickness(5));
    // Add data point to the line series
    this.lineSeries.add(this.points);
  }

  ngOnDestroy() {
    // "dispose" should be called when the component is unmounted to free all the resources used by the chart
    this.lineSeries.dispose();
  }
}

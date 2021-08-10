import { Component, Input, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import {
  lightningChart,
  ChartXY,
  Point,
  SolidLine,
  SolidFill,
  ColorHEX
} from '@arction/lcjs';

@Component({
  selector: 'app-chart',
  template: '<div [id]="this.chartId"></div>',
  styles: ['div { height: 100% }']
})

export class ChartComponent implements OnChanges, OnDestroy, AfterViewInit {
  chart: ChartXY;
  chartId: number;

  @Input() points: Point[];
  @Input() points2: Point[];
  @Input() points3: Point[];
  @Input() points4: Point[];
  @Input() points5: Point[];

  constructor() {}

  ngOnChanges() {
    // Generate random ID to us as the containerId for the chart and the target div id
    this.chartId = Math.trunc(Math.random() * 1000000);
  }

  ngAfterViewInit() {
    // Create chartXY
    this.chart = lightningChart().ChartXY({container: `${this.chartId}`});
    // Set chart title
    this.chart.setTitle('IVLIVE CHARTS');
    // Add line series to the chart
    const lineSeries = this.chart.addLineSeries();
    const lineSeries2 = this.chart.addLineSeries();
    const lineSeries3 = this.chart.addLineSeries();
    const lineSeries4 = this.chart.addLineSeries();
    const lineSeries5 = this.chart.addLineSeries();
    // Set stroke style of the line
    lineSeries.setStrokeStyle(new SolidLine({ thickness: 1, fillStyle: new SolidFill({ color: ColorHEX('#F00') }) }));
    lineSeries2.setStrokeStyle(new SolidLine({ thickness: 10, fillStyle: new SolidFill({ color: ColorHEX('#ffb700') }) }));
    lineSeries3.setStrokeStyle(new SolidLine({ thickness: 3, fillStyle: new SolidFill({ color: ColorHEX('#4af631') }) }));
    lineSeries4.setStrokeStyle(new SolidLine({ thickness: 5, fillStyle: new SolidFill({ color: ColorHEX('#1531a1') }) }));
    lineSeries5.setStrokeStyle(new SolidLine({ thickness: 3, fillStyle: new SolidFill({ color: ColorHEX('#bb3cc5') }) }));
    // Add data point to the line series
    lineSeries.add(this.points);
    lineSeries2.add(this.points2);
    lineSeries3.add(this.points3);
    lineSeries4.add(this.points4);
    lineSeries5.add(this.points5);
  }

  ngOnDestroy() {
    // "dispose" should be called when the component is unmounted to free all the resources used by the chart
    this.chart.dispose();
  }
}

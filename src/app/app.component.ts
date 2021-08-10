import {
  Component,
  OnInit
} from '@angular/core';
import { Point } from '@arction/lcjs';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <app-chart
      [points]="this.points"
      [points2]="this.points2"
      [points3]="this.points3"
      [points4]="this.points4"
      [points5]="this.points5"
    ></app-chart>
  </div>`,
  styles: ['div { height: 100vh }']
})

export class AppComponent implements OnInit {
  points: Point[] = [];
  points2: Point[] = [];
  points3: Point[] = [];
  points4: Point[] = [];
  points5: Point[] = [];

  public ngOnInit(): void {
    let visits = 10;
    for (let i = 1; i < 50000; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      this.points.push({x: i, y: visits });
      this.points2.push({x: i, y: visits * 0.3 });
      this.points3.push({x: i, y: visits * 1.5 });
      this.points4.push({x: i, y: visits * 2 });
      this.points5.push({x: i, y: visits * 0.01 });
    }
  }
}

import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from '../chart';

@Component({
  selector: 'app-zingchart',
  templateUrl: './zingchart.component.html',
  styleUrls: ['./zingchart.component.css']
})
export class ZingchartComponent implements AfterViewInit, OnInit {
  chart: Chart = {
    id:"chart-1",
    data: {
      type: 'bar',
      series: [
        {
          values: [1, 2, 3]
        }
      ]
    },
    height:400,
    width:400
  };
  constructor() { }

  ngAfterViewInit () {
    zingchart.render(this.chart)
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/scripts/canvasjs.min';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    let chart1 = new CanvasJS.Chart("lineChart1", {
      theme: "light1",
      animationEnabled: true,
      exportEnabled: true,
      axisX: {
        prefix: "$",
        suffix: "K"
      },
      axisY: {
        title: "12 months Utilization Trend",
        prefix: "$",
        suffix: "K"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "bottom",
        horizontalAlign: "center",
        dockInsidePlotArea: true
      },
      data: [{
        type:"line",
        name: "San Fransisco",
        showInLegend: true,
        dataPoints: [		
          { x: 240, y: 850 },
          { x: 280, y: 889 },
          { x: 300, y: 890 },
          { x: 340, y: 899 },
          { x: 460, y: 903 },
          { x: 560, y: 925 }
        ]
      },
      {
        type: "line",
        name: "Seatle",
        showInLegend: true,
        dataPoints: [
          { x: 250, y: 409 },
          { x: 290, y: 415 },
          { x: 350, y: 419 },
          { x: 380, y: 429 },
          { x: 480, y: 429 },
          { x: 580, y: 450 }
        ]
      }]
    });
      
    chart1.render();

    let chart2 = new CanvasJS.Chart("lineChart2", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      axisX: {
        prefix: "$",
        suffix: "K"
      },
      axisY: {
        title: "12 months Utilization Trend",
        prefix: "$",
        suffix: "K"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "bottom",
        horizontalAlign: "center",
        dockInsidePlotArea: true
      },
      data: [{
        type:"line",
        name: "Los Angeles",
        showInLegend: true,
        dataPoints: [		
          { x: 240, y: 850 },
          { x: 280, y: 889 },
          { x: 300, y: 890 },
          { x: 340, y: 899 },
          { x: 460, y: 903 },
          { x: 560, y: 925 }
        ]
      },
      {
        type: "line",
        name: "Manhattan",
        showInLegend: true,
        dataPoints: [
          { x: 250, y: 409 },
          { x: 290, y: 415 },
          { x: 350, y: 419 },
          { x: 380, y: 429 },
          { x: 480, y: 429 },
          { x: 580, y: 450 }
        ]
      }]
    });
      
    chart2.render();
  }

}

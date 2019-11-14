import { Component, OnInit, Input, Inject } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import * as CanvasJS from '../../../../../assets/canvasjs.min';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  chartData: any;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  trends : any = [];
  
  //Property used to display the table & table post search
  @Input() displayResult: boolean;

  constructor(private _searchService : SearchService, public dialog: MatDialog) { }

  ngOnInit() {
    
    //Set the trends value on load and render it as table
    this.trends = this._searchService.productTrends["resultSet"]
  }

  // Used in keyvalue pipe in the template to return the JSON un-sorted
  returnZero() {
    return 0
  }

  
  triggerOnInit() {
    this.ngOnInit();
  }

  // Show Chart on button click
  callChart(): void {
    let resultSet = this.trends
    let hdata = [];
    let fdata = [];
    let colors = ["Blue", "Cyan", "Green", "Red", "Yellow", "Orange", "Purple", "HotPink", "Lime", "Magenta"];
    resultSet.forEach(graph);
    let chartData = hdata.concat(fdata);
    this.dialog.open(PopupDialog, {
      width: '90%',
      height: '600px',
      maxHeight: '90%',
      maxWidth: '90%',
      data: { chartData: chartData }
    });

    function graph(item, index) {
      let fdataPoints = [];
      let hdataPoints = [];
      Object.values(item.history).forEach(procesHistoryData);
      Object.values(item.forecast).forEach(processForecastData);
      hdata.push({
        type: "spline",
        visible: true,
        showInLegend: true,
        name: item.productname + " " + item.attribute + " Sales History",
        color: colors[index % colors.length],
        dataPoints: hdataPoints
      });
      fdata.push({
        type: "spline",
        visible: true,
        lineDashType: "dash",
        showInLegend: true,
        name: item.productname + " " + item.attribute + " Forecast",
        color: colors[index % colors.length],
        dataPoints: fdataPoints
      });

      function processForecastData(item, index) {
        fdataPoints.push({ label: item.saleDate, y: item.quantity, x: new Date(item.saleDate) });
      }

      function procesHistoryData(item, index) {
        hdataPoints.push({ label: item.saleDate, y: item.quantity, x: new Date(item.saleDate) });
      }
    }
  }
}

@Component({
  selector: 'popup-dialog',
  templateUrl: 'popup-dialog.html',
})
export class PopupDialog implements OnInit {
  constructor(public dialogRef: MatDialogRef<PopupDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("container", {
      theme: "light2",
      height: 400,
      animationEnabled: true,
      title: {
        text: "Sales History & Forecast"
      },
      axisX: {
        title: "Sales & Forecast Dates",
        scaleBreaks: {
          autoCalculate: true
        }
      },
      axisY: {
        includeZero: true,
        title: "Sales"
      },
      toolTip: {
        shared: false
      },
      legend: {
        cursor: "pointer",
        itemclick: toggleDataSeries
      },
      data: this.data.chartData
    });
    chart.render();

    function toggleDataSeries(e) {
      if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  }
  close() {
    this.dialogRef.close();
  }
}
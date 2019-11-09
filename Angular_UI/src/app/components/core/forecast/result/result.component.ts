import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public empData: Object;
  public temp: Object = false;
  displayedColumns;

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      'paging': false,
      'ordering': false,
      'info': false,
      'searching': false,
      'scrollX': true

    };
    this.empData = [{ userId: "123", title: "title1", body: "body1" },
    { userId: "456", title: "title2", body: "body2" },
    { userId: "789", title: "title3", body: "body3" },
    { userId: "987", title: "title4", body: "body4" }];
    this.temp = true;
    this.displayedColumns = ['UserId2', 'title2', 'body2']
  }

}

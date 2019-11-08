import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public empData: Object;
  public temp: Object=false;
  displayedColumns;

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      "paging":   false,
      "ordering": false,
      "info":     false,  
      "searching": false,
      "scrollX": true

    };
  this.empData = [ {"userId": "123", "title":"title1", "body":"body1"},
                   {"userId": "456", "title":"title2", "body":"body2"}];
  this.temp = true;
  this.displayedColumns= ['UserId2', 'title2', 'body2']
  }

}

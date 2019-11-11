import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  trends : object = [];
  
  @Input() displayResult: boolean;

  constructor(private _searchService : SearchService) { }

  ngOnInit() {
   
    this.dtOptions = {
      "paging":   false,
      "ordering": false,
      "info":     false,  
      "searching": false,
      "scrollX": true

    };

    this.trends = this._searchService.productTrends["resultSet"]

  }

  triggerOnInit() {
    this.ngOnInit();
    console.log(this.trends)
  }

}

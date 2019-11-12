import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  trends : object = [];
  
  //Property used to display the table & table post search
  @Input() displayResult: boolean;

  constructor(private _searchService : SearchService) { }

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
    //console.log(this.trends)
  }

  // Show Chart on button click
  callChart(){
    alert("Chart should be attached. WIP")
  }
}

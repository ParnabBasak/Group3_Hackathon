import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { SearchService } from 'src/app/services/search/search.service';
import { LookupsService } from 'src/app/services/master/lookups.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { ResultComponent } from 'src/app/components/core/forecast/result/result.component'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild(ResultComponent, { static: false }) _resultComponent: ResultComponent;

  searchForm: FormGroup;
  channels: any = [];
  weeks: any = [];


  showResult = false;

  constructor(private builder: FormBuilder,
    private _searchService: SearchService,
    private _router: Router,
    private _lookupsService: LookupsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.searchForm = this.builder.group({
      channel: ['', Validators.required],
      histstdate: ['', Validators.required],
      histweek: ['', Validators.required],
      forecastdate: ['', Validators.required],
      forecastweek: ['', Validators.required],
    })

    this.getChannels();
    this.getWeeks();
  }

  searchTrend() {
    const data  = {
      channel : this.searchForm.get('channel').value,
      historyStartDate : this.searchForm.get('histstdate').value,
      historyTrendWeeks : this.searchForm.get('histweek').value,
      forecastStartDate : this.searchForm.get('forecastdate').value,
      forecastTrendWeeks : this.searchForm.get('forecastweek').value,
    }

    this._searchService.fetchTrend(data)
    //this._searchService.fetchTrend()
    .subscribe(result => {
      this._searchService.productTrends = result;
      //check the return value from service. If result set is empty throw error message
      if (result["resultSet"].length !==0) {
      this._resultComponent.triggerOnInit()
       this.showResult = true;
      } else {
        this.toastr.error('Products not available for the search period/channel.', 'OOPS!', {
          positionClass: 'toast-top-center' 
       });
      this.showResult = false;
    }
     });

     
  }

  getChannels() {
    this._lookupsService.getChannels().subscribe(data => {
      this.channels = data;
    });
  }

  getWeeks() {
    this._lookupsService.getLookups('WEEKS').subscribe(data => {
      var temp = data[0].values;
      this.weeks = temp;
    });
  }
}

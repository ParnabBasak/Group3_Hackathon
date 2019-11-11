import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  productTrends : object = [];

  constructor(private http: HttpClient) { }

  fetchTrend(data) : Observable<any>{
     return this.http.post<any>(environment.apiBaseUrl + '/trends',data);
  }

  
}

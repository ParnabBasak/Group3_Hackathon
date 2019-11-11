import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiFetchTrend = "http://localhost:3000/api/trends" //placeholder for API URL
  apiFetchChannel = "http://localhost:3000/api/channels" //placeholder for API URL
 
  productTrends : object = [];

  messageSource = new BehaviorSubject<any>(new Object());
  currentMessage = this.messageSource.asObservable();


  constructor(private http: HttpClient) { }

  fetchTrend(data) : Observable<any>{
     return this.http.post<any>(this.apiFetchTrend,data)
  }

  getChannels () : Observable<any>{
    return this.http.get<any>(this.apiFetchChannel)
  }
}

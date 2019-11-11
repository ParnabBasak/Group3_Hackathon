import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  constructor(private http: HttpClient) { }

  getChannels() : Observable<any>{
    return this.http.get<any>(environment.apiBaseUrl+'/channels');
  }

  getWeeks() : Observable<any>{
    return this.http.get<any>(environment.apiBaseUrl+'/master/'+'WEEKS');
  }
}

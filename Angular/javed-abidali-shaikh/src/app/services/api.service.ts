import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  selectedRestaurant = new Subject();
  selectedFood = new Subject();

  url: any = 'https://staging.pearpartner.com/restaurant/';
  constructor(private http: HttpClient) {}

  fetchData(){
    return this.http.get(this.url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PearApiService {
  url: any = 'https://staging.pearpartner.com/restaurant/';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: any = 'https://api2.binance.com/api/v3/ticker/24hr';
  constructor(private api: HttpClient) {}

  get(){
    return this.api.get(this.url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiCallService {

  constructor(private http: HttpClient ) {}

  callinApi(number: number){
    return this.http.get(' https://inspiration.goprogram.ai');
  }
}

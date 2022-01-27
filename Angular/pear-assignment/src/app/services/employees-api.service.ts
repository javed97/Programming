import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesApiService {
  url: any = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"

  constructor(private empApi: HttpClient) { }

  getEmployeeData(){
    return this.empApi.get(this.url);
  }
}

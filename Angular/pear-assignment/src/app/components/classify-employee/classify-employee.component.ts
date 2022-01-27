import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeesApiService } from 'src/app/services/employees-api.service';

@Component({
  selector: 'app-classify-employee',
  templateUrl: './classify-employee.component.html',
  styleUrls: ['./classify-employee.component.css'],
})
export class ClassifyEmployeeComponent implements OnInit {
  employeeData: any = [];
  genderData: any = [];

  constructor(private employeesAPi: EmployeesApiService) {
    this.fetchEmployeeData();
  }

  ngOnInit(): void {}

  async fetchEmployeeData() {
    this.employeeData = await this.employeesAPi.getEmployeeData().toPromise();
    console.log(this.employeeData);
    this.employeeData.forEach((element: any, index: any) => {
      element.gender = index <= 5 ? 'male' : 'female';
    });
  }

  selectGender(event: any) {
    this.genderData = this.employeeData.filter((element: any) => {
      return (
        element.gender === event.target.value || event.target.value === 'all'
      );
    });
    console.log(this.genderData);
  }
}

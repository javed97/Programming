import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css'],
})
export class DisplayEmployeesComponent implements OnInit, OnChanges {
  @Input() employeeDetails: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.employeeDetails);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.employeeDetails);
  }
}

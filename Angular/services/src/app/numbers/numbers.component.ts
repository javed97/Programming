import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {
  constructor(private service: ApiCallService) {}

  ngOnInit(): void {
    console.log(this.num.toString() + 25);
  }

  inputNumber: number = 0;
  num = new Number(25);

  getNumber($event: any) {

    this.inputNumber = $event.target.value;
    this.service.callinApi(this.inputNumber).subscribe({
      next: (data) => {
        console.log(data.valueOf());
      },
      error: (error) => console.log.apply(error),
      complete: () => console.log('Completed'),
    });
    console.log('From Numbers Component ', this.inputNumber);
  }
}

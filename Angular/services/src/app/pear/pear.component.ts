import { Component, OnInit } from '@angular/core';
import { PearApiService } from '../pear-api.service';

@Component({
  selector: 'app-pear',
  templateUrl: './pear.component.html',
  styleUrls: ['./pear.component.scss'],
})
export class PearComponent implements OnInit {
  incomingData: any;

  constructor(private pearApi: PearApiService) {}

  fetchData() {
    this.incomingData = this.pearApi.getData().subscribe({
      next(response) {
        console.log(response);
        console.log(typeof response);

      },
      error(error) {
        console.log(error);
      },
      complete() {
        console.log('Completed');
      },
    });
  }

  ngOnInit(): void {}
}

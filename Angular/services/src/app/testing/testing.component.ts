import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  constructor() { }

  tempName: string = 'Javed';

  ngOnInit(): void {
    setTimeout(() => {
      this.tempName = 'Kaushikkk'
    }, 5000);
  }


}

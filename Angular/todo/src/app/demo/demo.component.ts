import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  demoData: any = 'Test';
  @Output() eventEmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sendData() {
    this.eventEmit.emit(this.demoData);
  }
}

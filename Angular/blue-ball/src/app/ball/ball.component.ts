import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() randomNumber: number = 0;
  @Input() counter: number = 0;
  @Input() attempts: number = 0;
  @Output() attemptState = new EventEmitter<string>();

  changeColor(color: string, $event: any) {
    $event.target.style.color = 'white';
    $event.target.style.backgroundColor = color;
    this.attemptState.emit(color);
  }

  ballClicked($event: any) {
    console.log(' Number = ' + this.randomNumber);
    if (this.counter === this.randomNumber) {
      this.changeColor('blue', $event);
    } else if (this.counter === this.randomNumber - 1) {
      this.changeColor('green', $event);
    } else if (this.counter === this.randomNumber + 1) {
      this.changeColor('red', $event);
    } else {
      this.changeColor('#87de54', $event);
    }
  }
}

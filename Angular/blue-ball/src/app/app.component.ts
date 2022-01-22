import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    for (let i = 0; i < 20; i++) {
      this.items.push(i);
    }
  }

  items: number[] = [];
  title = 'blue-ball';
  start: boolean = true;
  attempts: number = 5;
  randomNumber: number = Math.floor(Math.random() * 20);

  setGameValue($event: boolean) {
    this.start = $event;
  }

  displayAttempts(color: string) {
    if (this.attempts > 0) {
      this.attempts--;
      if (color === 'blue') {
        this.attempts = 0;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  demoData: any = '';

  ngOnInit(): void {
    this.originalTaskArray = JSON.parse(
      localStorage.getItem('originalTaskArray') || '[]'
    );
  }

  title = 'todo';

  originalTaskArray: string[] = [];
  completedTaskArray: string[] = [];

  addTask(task: HTMLInputElement) {
    this.originalTaskArray.push(task.value);
    task.value = '';
    localStorage.setItem(
      'originalTaskArray',
      JSON.stringify(this.originalTaskArray)
    );
  }

  deleteTask(i: number) {
    this.originalTaskArray.splice(i, 1);
    localStorage.setItem(
      'originalTaskArray',
      JSON.stringify(this.originalTaskArray)
    );
  }

  moveToCompleted(item: string) {
    this.completedTaskArray.push(item);
  }

  moveToOriginal(item: string) {
    this.originalTaskArray.push(item);
  }

  deleteFromCompleted(i: number) {
    this.completedTaskArray.splice(i, 1);
  }

  recieveData(data: any) {
    this.demoData = data;
  }
}

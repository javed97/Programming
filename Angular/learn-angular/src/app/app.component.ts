import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Learn Angular";
  items = ['item1', 'item2', 'item3'];

  empty = "";

  catch(data: string) {
    console.log(data);
    this.empty = data;
  }
}

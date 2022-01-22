import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input() parentData: string = "";
  outputData: string = "This is from child";

  @Output() newItemEvent = new EventEmitter();

  cars: string[] = ["Volvo","Benz","Toyota"]; 

  name: any = "Javeed";

  displayData(data: any){
    this.newItemEvent.emit(data.target.value);
  }

  ngOnInit(): void {
    this.newItemEvent.emit("empty");
  }
}

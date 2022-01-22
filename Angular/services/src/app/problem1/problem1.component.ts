import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-problem1',
  templateUrl: './problem1.component.html',
  styleUrls: ['./problem1.component.scss']
})
export class Problem1Component implements OnInit{

  @Input() newData: any = '';

  constructor(arrayService: ArrayService) { 
    this.authors = arrayService.getArray();
  }

  title: string = "List of Authors"
  authors: string[] = [];
  name: any = "Javed" ;
  currentClass: boolean = false;

  swapClass(){
    this.currentClass = !this.currentClass
  }

  onKeyUp(){
    console.log(this.name);
  }

 

  ngOnInit(): void {
  }

  


}

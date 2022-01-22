import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-template',
  templateUrl: './welcome-template.component.html',
  styleUrls: ['./welcome-template.component.scss']
})
export class WelcomeTemplateComponent implements OnInit {

  @Output() stateEmitter = new EventEmitter<boolean>();

  onStart($event: any){
    this.stateEmitter.emit(false);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  cryptoData: any = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get().subscribe((next) => {
      this.cryptoData = next;
      console.log(this.cryptoData);
      console.log(this.cryptoData[0]);
      
    });
  }

  type: boolean = true;

  userName: string = 'Javed'
}

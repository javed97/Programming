import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

  foodCart : any = {};

  constructor(private api: ApiService) { 
    this.api.selectedFood.subscribe({
      next: (data: any) => {
        this.foodCart = data;
        this.foodCart = data.Categories;
        console.log(this.foodCart);
      },
      error: (error) => console.log.apply(error),
      complete: () => console.log('Completed'),
    })
  }

  ngOnInit(): void {
  }

  print(){
    // console.log(this.foodCart);
  console.log("Hello");
      
  }



}

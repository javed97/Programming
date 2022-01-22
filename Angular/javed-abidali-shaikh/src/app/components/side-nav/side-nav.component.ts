import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  allRestaurantData: any;
  selectedRestaurant: any = {};
  JSON = JSON;
  
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.fetchData().subscribe((response: any) => {
      this.allRestaurantData = response;
    });
  }

  selectOption(event: any) {
    this.selectedRestaurant =  JSON.parse(event.target.value);
    this.api.selectedRestaurant.next(this.selectedRestaurant);
    console.log(this.selectedRestaurant);
  }
}

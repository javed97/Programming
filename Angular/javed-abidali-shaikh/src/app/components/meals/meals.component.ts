import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent implements OnInit {
  selectedRestaurant: any = {};
  restaurantCategories: any = [];
  JSON = JSON;
  cart: any = {};

  constructor(private api: ApiService) {
    this.api.selectedRestaurant.subscribe({
      next: (data: any) => {
        this.selectedRestaurant = data;
        this.restaurantCategories = data.Categories;
        console.log(this.selectedRestaurant);
      },
      error: (error) => console.log.apply(error),
      complete: () => console.log('Completed'),
    });
  }

  ngOnInit(): void {}

  incrementQuantity(quantity: any, element: any, item: any) {
    quantity.value = +quantity.value + 1;
    if (this.cart[item.Category_name]) {
      this.cart[item.Category_name][element.Name] = {
        price: element.Price,
        quantity: quantity.value,
      };
      this.api.selectedFood.next(this.cart);
    } else {
      this.cart[item.Category_name] = {
        [element.Name]: { price: element.Price, quantity: quantity.value },
      };
      this.api.selectedFood.next(this.cart);
    }
    console.log(item);
  }

  decrementQuantity(quantity: any, element: any, item: any) {
    if (quantity.value != 0) {
      quantity.value = +quantity.value - 1;
      if (this.cart[item.Category_name]) {
        this.cart[item.Category_name][element.Name] = {
          price: element.Price,
          quantity: quantity.value,
        };
        this.api.selectedFood.next(this.cart);
      } else {
        this.cart[item.Category_name] = {
          [element.Name]: { price: element.Price, quantity: quantity.value },
        };
        this.api.selectedFood.next(this.cart);
      }
      console.log(this.cart);
    }
  }
}

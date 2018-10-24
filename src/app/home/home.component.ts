import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}
  Today = new Date();
  ngOnInit() {}
  get originProducts() {
    return this.dataService.originalProducts; // 這裡是get origin
  }
  add_to_cart(id, item_amount) {
    this.cartService.add_to_cart(id, item_amount);
  }
}

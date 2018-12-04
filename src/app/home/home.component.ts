import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}
  data: any = {data: []};
  Today = new Date();
  ngOnInit() {
  this.productsService.getNewProducts().subscribe(data => {
    this.data = data;
  });
  }
  add_to_cart(id, item_amount, stock) {
    this.cartService.add_to_cart(id, parseInt(item_amount, 10), parseInt(stock, 10));
  }
}

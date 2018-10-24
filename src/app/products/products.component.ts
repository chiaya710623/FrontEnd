import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}
  amount = 6;
  page = 1;
  choice = 0;
  search_list = {
    name: '',
    author_name: '',
    publisher: '',
    isbn: '',
    classification: ''
  };
  get show_list() {
    return this.dataService.show_list;
  }
  ngOnInit() {}
  get products() {
    return this.dataService.products;
  }
  add_to_cart(id, item_amount) {
    this.cartService.add_to_cart(id, item_amount);
  }
  search(search_list) {
    this.dataService.search(search_list);
  }
  sort(choice) {
    this.dataService.sort(choice);
  }
  origin() {
    this.dataService.origin();
  }
}

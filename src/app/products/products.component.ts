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
  amount = 3;
  page = 1;
  search_list = {
    name: '',
    author_name: '',
    publisher: '',
    isbn: '',
    classification: ''
  };
  show_list = {
    name: '',
    author_name: '',
    publisher: '',
    isbn: '',
    classification: ''
  };
  ngOnInit() {}
  get products() {
    return this.dataService.products;
  }
  add_to_cart(id, item_amount) {
    this.cartService.add_to_cart(id, item_amount);
    alert('已加入購物車');
  }
  search(search_list) {
    this.dataService.search(search_list);
    this.show_list = search_list;
  }
}

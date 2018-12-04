import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}
  amount = 6;
  page = 1;
  choice = 0;
  year = new Date().getFullYear();
  keyword_list = {
    name: '',
    author_name: '',
    publisher: '',
    isbn: '',
    classification: ''
  };
  sort = {
    id: '+',
    sale_price: '',
    publish_year: '',
  };
  data: any = { data: [], link: [], meta: [] };
  get show_list() {
    return this.productsService.show_list;
  }
  ngOnInit() {
    this.productsService.getProducts(this.amount, this.page, this.sort).subscribe(data => {
      this.data = data;
      this.page = this.data.meta.current_page;
      console.log(this.data, this.page);
    });
  }
  add_to_cart(id, item_amount, stock) {
    this.cartService.add_to_cart(id, item_amount, stock);
  }
}
  // search(keyword_list) {
  //   this.productsService.search(keyword_list);
  //   this.page = 1;
  // }
  // sort(choice) {
  //   this.productsService.sort(choice);
  //   this.page = 1;
  // }
// }

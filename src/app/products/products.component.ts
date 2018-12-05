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
  amount = 9;
  page = 1;
  year = new Date().getFullYear();
  search = {
    catagory: '',
    subcatagory: '',
    publisher: '',
    title: '',
    author: '',
    interpreter: '',
    ISBN: ''
  };
  show = {
    catagory: '',
    subcatagory: '',
    publisher: '',
    title: '',
    author: '',
    interpreter: '',
    ISBN: ''
  };
  sort = '';
  catagories: any = [];
  data: any = { data: [], link: [], meta: [] };
  ngOnInit() {
    this.productsService.getCatagories().subscribe(data => {
      this.catagories = data;
      console.log(data);
    });
    this.productsService
      .getProducts(this.amount, this.page, this.sort, this.search)
      .subscribe(data => {
        this.data = data;
        this.page = this.data.meta.current_page;
        console.log(data);
      });
  }
  add_to_cart(id, item_amount, stock) {
    this.cartService.add_to_cart(id, item_amount, stock);
  }
  search_submit() {
    this.show.catagory = this.search.catagory;
    this.show.subcatagory = this.search.subcatagory;
    this.show.publisher = this.search.publisher;
    this.show.title = this.search.title;
    this.show.author = this.search.author;
    this.show.interpreter = this.search.interpreter;
    this.show.ISBN = this.search.ISBN;
    this.ngOnInit();
  }
}

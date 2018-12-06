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
  get search() {
    return this.productsService.search;
  }
  show = {
    category: '',
    subcategory: '',
    publisher: '',
    title: '',
    author: '',
    interpreter: '',
    ISBN: ''
  };
  sort = '';
  categories: any = [];
  subcategories: any = [];
  data: any = { data: [], link: [], meta: [] };
  ngOnInit() {
    if (this.search.category !== '') {
      this.show.category = this.categories[
        parseInt(this.search.category, 10) - 1
      ].name;
    } else {
      this.show.category = '';
    }
    if (this.search.subcategory !== '') {
      this.getSubcategories(this.search.category);
      this.show.subcategory = this.subcategories[
        parseInt(this.search.subcategory, 10) - 1
      ].name;
    } else {
      this.show.subcategory = '';
    }
    this.show.publisher = this.search.publisher;
    this.show.title = this.search.title;
    this.show.author = this.search.author;
    this.show.interpreter = this.search.interpreter;
    this.show.ISBN = this.search.ISBN;
    console.log(this.show);
    this.productsService.getCategories().subscribe((data: any) => {
      this.categories = data.data;
    });
    this.getProducts();
  }
  add_to_cart(id, item_amount, stock) {
    this.cartService.add_to_cart(id, item_amount, stock);
  }
  search_submit() {
    if (this.search.category !== '') {
      this.show.category = this.categories[
        parseInt(this.search.category, 10) - 1
      ].name;
    } else {
      this.show.category = '';
    }
    if (this.search.subcategory !== '') {
      this.getSubcategories(this.search.category);
      this.show.subcategory = this.subcategories[
        parseInt(this.search.subcategory, 10) - 1
      ].name;
    } else {
      this.show.subcategory = '';
    }
    this.show.publisher = this.search.publisher;
    this.show.title = this.search.title;
    this.show.author = this.search.author;
    this.show.interpreter = this.search.interpreter;
    this.show.ISBN = this.search.ISBN;
    console.log(this.show);
    this.ngOnInit();
  }
  getSubcategories(category) {
    this.productsService.getSubcategories(category).subscribe((data: any) => {
      this.subcategories = data.data;
      console.log(data);
    });
  }
  getProducts() {
    this.productsService
      .getProducts(this.amount, this.page, this.sort, this.search)
      .subscribe((data: any) => {
        this.data = data;
        this.page = this.data.meta.current_page;
        console.log(data);
      });
  }
}

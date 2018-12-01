import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
 show_list = {
    name: '',
    author_name: '',
    publisher: '',
    isbn: '',
    classification: ''
  };
  year = new Date().getFullYear();
  getNewProducts() {
    console.log(this.year);
    return this.httpClient.get(`http://host.limaois.me:1723/api/products?publish_year=${this.year}`);
  }
  getProducts(amount, page) {
    return this.httpClient.get(`http://host.limaois.me:1723/api/products?count=${amount}&current_page=${page}`);
  }
  getProduct(id) {
    return this.httpClient.get(`http://host.limaois.me:1723/api/products?id=${id}`);
  }

  search(keyword_list) {
    this.show_list = keyword_list;
  }
  // sort(choice) {
  //   switch (choice) {
  //     case '1': // 價錢高到低
  //       for (let i = 0; i < this.products.length; i++) {
  //         for (let j = 1; j < this.products.length - i; j++) {
  //           if (this.products[j].price > this.products[j - 1].price) {
  //             const t = this.products[j];
  //             this.products[j] = this.products[j - 1];
  //             this.products[j - 1] = t;
  //           }
  //         }
  //       }
  //       break;
  //     case '2': // 價錢低到高
  //       for (let i = 0; i < this.products.length; i++) {
  //         for (let j = 1; j < this.products.length - i; j++) {
  //           if (this.products[j].price < this.products[j - 1].price) {
  //             const t = this.products[j];
  //             this.products[j] = this.products[j - 1];
  //             this.products[j - 1] = t;
  //           }
  //         }
  //       }
  //       break;
  //   }
  // }
}

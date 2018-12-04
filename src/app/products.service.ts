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
    return this.httpClient.get(`http://host.limaois.me:1723/api/products?publish_year=${this.year}`);
  }
  getProducts(amount, page, sort) {
    return this.httpClient.get(`http://host.limaois.me:1723/api/products?count=${amount}&page=${page}&sort=${sort}`);
  }
  getProduct(id) {
    return this.httpClient.get(`http://host.limaois.me:1723/api/products/${id}`);
  }

  search(keyword_list) {
    this.show_list = keyword_list;
  }
}

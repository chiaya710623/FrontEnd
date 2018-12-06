import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  year = new Date().getFullYear();
  search = {
    category: '',
    subcategory: '',
    publisher: '',
    title: '',
    author: '',
    interpreter: '',
    ISBN: ''
  };
  getNewProducts() {
    return this.httpClient.get(
      `${environment.api}products?publish_year=${this.year}`
    );
  }
  getProducts(amount, page, sort, search) {
    return this.httpClient.get(
      `${
        environment.api
      }products?count=${amount}&page=${page}&sort=${sort}&search=${JSON.stringify(
        search
      )}`
    );
  }
  getProduct(id) {
    return this.httpClient.get(`${environment.api}products/${id}`);
  }
  getCategories() {
    return this.httpClient.get(`${environment.api}categories/`);
  }
  getSubcategories(category) {
    return this.httpClient.get(`${environment.api}categories/${category}`);
  }
}

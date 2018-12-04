import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  year = new Date().getFullYear();
  getNewProducts() {
    return this.httpClient.get(`http://host.limaois.me:1723/api/products?publish_year=${this.year}`);
  }
  getProducts(amount, page, sort, search) {
    return this.httpClient.get(`http://host.limaois.me:1723/api/products?count=${amount}&page=${page}&sort=${sort}&search=${search}`);
  }
  getProduct(id) {
    return this.httpClient.get(`http://host.limaois.me:1723/api/products/${id}`);
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private cartService: CartService,
    private productsService: ProductsService,
    private router: Router,
    private httpClient: HttpClient
  ) {}
  cart = {};
  ngOnInit() {
    // this.cartService.getCart().subscribe(data => {
    //   this.cart = data;
    // });
  }

  getCart() {
    // return this.cartService.getCart();
  }

  getProduct(id) {
    return this.productsService.getProduct(id);
  }

  logout() {
    this.usersService.logout();
    alert('已登出');
    this.router.navigate(['/']);
  }

  delete_item(index) {
    this.cartService.cart.splice(index, index + 1);
    this.cartService.list_amount--;
  }

  checkout() {
    if (this.cartService.list_amount === 0) {
      alert('購物車中沒有商品。');
    } else {
      this.router.navigate(['/cartlist']);
    }
  }
}

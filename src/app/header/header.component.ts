import { Component, OnInit, Output } from '@angular/core';
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
  cart = [];
  show_cart = [];
  list_amount = 0;
  ngOnInit() {
    if (this.usersService.isLogin()) {
      this.cartService.getCart().subscribe((data: any) => {
        this.cart = data.data;
      });
    }
    if (this.cart === []) {
      alert('購物車內沒有商品');
    } else {
      for (let i = 0; i < this.cart.length; i++) {
        this.productsService
          .getProduct(this.cart[i].id)
          .subscribe((data: any) => {
            console.log(this.cart[i].id);
            this.show_cart[i].id = this.cart[i].id;
            this.show_cart[i].item_amount = this.cart[i].item_amount;
            this.show_cart[i].product = data.data;
          });
      }
    }
    console.log(this.cart);
    console.log(this.show_cart);
  }

  logout() {
    this.usersService.logout();
    alert('已登出');
    this.router.navigate(['/']);
  }

  delete_item(index) {
    this.cart.splice(index, index + 1);
    this.list_amount--;
    this.cartService.cart = this.cart;
    this.cartService.list_amount = this.list_amount;
    if (this.usersService.isLogin()) {
      this.cartService.postCart(this.cart);
    }
  }

  checkout() {
    if (this.list_amount === 0) {
      alert('購物車中沒有商品。');
    } else {
      this.router.navigate(['/cartlist']);
    }
  }
}

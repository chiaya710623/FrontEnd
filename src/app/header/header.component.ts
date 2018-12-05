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
  show_cart = [];
  ngOnInit() {
    if (this.usersService.isLogin()) {
      this.cartService.getCart().subscribe((data: any) => {
        this.cartService.cart = data.data;
      });
    }
    this.show_cart = [];
    if (this.list_amount !== 0) {
      for (let i = 0; i < this.cart.length; i++) {
        this.productsService
          .getProduct(this.cart[i].id)
          .subscribe((data: any) => {
            this.show_cart[i] = {
              id: this.cart[i].id,
              item_amount: this.cart[i].item_amount,
              product: data
            };
          });
      }

      console.log('cart', this.cart);
      console.log('show_cart', this.show_cart);
    }
  }

  logout() {
    this.usersService.logout();
    alert('已登出');
    this.cartService.cart = [];
    this.router.navigate(['/']);
  }

  delete_item(index) {
    this.cartService.delete_item(index);
    if (this.usersService.isLogin()) {
      this.cartService.postCart(this.cart);
    }
  }

  get cart() {
    return this.cartService.cart;
  }

  get list_amount() {
    return this.cartService.list_amount;
  }

  checkout() {
    if (this.list_amount === 0) {
      alert('購物車中沒有商品。');
    } else {
      this.router.navigate(['/cartlist']);
    }
  }
}

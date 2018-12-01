import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
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
    private router: Router
  ) {}
  ngOnInit() {}
  get login_id() {
    return this.usersService.login_id;
  }
  logout() {
    this.usersService.logout();
    alert('已登出');
    this.router.navigate(['/']);
  }
  get username() {
    return this.usersService.member[this.usersService.login_id - 1].name;
  }
  // get cart() {
  //   const cart = [];
  //   for (let i = 0; i < this.cartService.cart.length; i++) {
  //     for (let j = 0; j < this.productsService.originalProducts.length; j++) {
  //       if (
  //         this.cartService.cart[i].id ===
  //         this.productsService.originalProducts[j].id
  //       ) {
  //         cart[i] = this.productsService.originalProducts[j];
  //         cart[i].amount = this.cartService.cart[i].item_amount;
  //       }
  //     }
  //   }
  //   return cart;
  // }
  delete_item(index) {
    this.cartService.cart.splice(index, index + 1);
    this.cartService.list_amount--;
  }
  search(search_list) {
    this.productsService.search(search_list);
  }
  // origin() {
  //   this.productsService.origin();
  // }
  checkout() {
    if (this.cartService.list_amount === 0) {
      alert('購物車中沒有商品。');
    } else {
      this.router.navigate(['/cartlist']);
    }
  }
}

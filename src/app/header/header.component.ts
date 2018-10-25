import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private memberService: MemberService,
    private cartService: CartService,
    private dataService: DataService,
    private router: Router
  ) {}
  ngOnInit() {}
  get login() {
    return this.memberService.login;
  }
  logout() {
    this.memberService.logout();
    alert('已登出');
    this.router.navigate(['/']);
  }
  get username() {
    return this.memberService.member[this.memberService.login - 1].name;
  }
  get cart() {
    const cart = [];
    for (let i = 0; i < this.cartService.cart.length; i++) {
      for (let j = 0; j < this.dataService.originalProducts.length; j++) {
        if (
          this.cartService.cart[i].id ===
          this.dataService.originalProducts[j].id
        ) {
          cart[i] = this.dataService.originalProducts[j];
          cart[i].amount = this.cartService.cart[i].item_amount;
        }
      }
    }
    return cart;
  }
  delete_item(index) {
    this.cartService.cart.splice(index, index + 1);
    this.cartService.list_amount--;
  }
  search(search_list) {
    this.dataService.search(search_list);
  }
  origin() {
    this.dataService.origin();
  }
  checkout() {
    console.log(this.cartService.cart);
    if (this.cartService.list_amount === 0) {
      alert('購物車中沒有商品。');
    } else {
      this.router.navigate(['/cartlist']);
    }
  }
}

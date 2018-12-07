import { Component, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    private cartService: CartService,
    private productsService: ProductsService,
    private router: Router,
    private cookieService: CookieService,
  ) {}
  get show_cart() {
    return this.cartService.show_cart;
  }
  categories: any = [];
  ngOnInit() {
    // read categories
    this.productsService.getCategories().subscribe((data: any) => {
      this.categories = data.data;
    });
    this.cartService.show();
  }

  logout() {
    this.cartService.patchCart(this.cartService.cart);
    // 等下處理成 註冊新會員後跟結帳完自動patch一個空購物車
    this.usersService.logout();
    alert('已登出');
    this.usersService.isLogin = 0;
    if (this.cookieService.check('cart') === true) {
      this.cartService.cart = JSON.parse(this.cookieService.get('cart'));
    }
    this.router.navigate(['/']);
  }
  delete_item(index) {
    this.cartService.delete_item(index);
    this.cartService.show();
  }

  get cart() {
    return this.cartService.cart;
  }

  checkout() {
    if (this.usersService.isLogin) {
      if (JSON.stringify(this.cart) === '[]') {
        alert('購物車中沒有商品。');
      } else {
        this.router.navigate(['/cartlist']);
      }
    } else {
      alert('請登入後結帳。');
      this.router.navigate(['/login']);
    }
  }
  clickItem(item) {
    if (item !== null) {
      this.router
        .navigateByUrl('/reload', { skipLocationChange: true })
        .then(() => this.router.navigate(['/products', item.id]));
    }
  }

  reload(url) {
    this.router
      .navigateByUrl('/reload', { skipLocationChange: true })
      .then(() => this.router.navigate([url]));
  }
}

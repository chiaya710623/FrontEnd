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
    private cookieService: CookieService
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
    // read cart
    if (this.usersService.isLogin()) {
      this.cartService.getCart().subscribe((data: any) => {
        if (data.products !== {}) {
          Object.keys(data.products).forEach(product => {
            this.cartService.cart.push({
              id: product,
              item_amount: data.products[product],
            });
          });
      }});
      this.show();
    } else {
      // not logged in
      if (this.cookieService.check('cart') === false) {
        this.cookieService.set('cart', JSON.stringify(this.cartService.cart));
      } else {
        this.cartService.cart = JSON.parse(this.cookieService.get('cart'));
      }
      this.show();
    }
  }

  show() {
    this.cartService.show_cart = [];
    if (JSON.stringify(this.cart) !== '[]') {
      for (let i = 0; i < this.cart.length; i++) {
        console.log(this.cart);
        this.productsService
          .getProduct(this.cart[i].id)
          .subscribe((data: any) => {
            this.cartService.show_cart[i] = {
              id: this.cart[i].id,
              item_amount: this.cart[i].item_amount,
              product: data
            };
          });
      }
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
      this.cartService.patchCart(this.cart);
    } else {
      this.cookieService.set('cart', JSON.stringify(this.cartService.cart));
    }
  }

  get cart() {
    return this.cartService.cart;
  }

  checkout() {
    if (this.usersService.isLogin()) {
      if (JSON.stringify(this.cart) !== '[]') {
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

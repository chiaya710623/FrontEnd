import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
  total = 0;
  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}
  ngOnInit() {
    this.cartService.show_cart = [];
    this.total = 0;
    this.show();
  }
  show() {
    console.log('show cart');
    if (JSON.stringify(this.cart) !== '[]') {
      console.log('ee');
      for (let i = 0; i < this.cart.length; i++) {
        this.productsService
          .getProduct(this.cart[i].id)
          .subscribe((data: any) => {
            this.cartService.show_cart[i] = {
              id: this.cart[i].id,
              item_amount: this.cart[i].item_amount,
              product: data
            };
            this.total +=
              this.show_cart[i].item_amount *
              this.show_cart[i].product.sale_price;
          });
      }
      console.log('cart', this.cart);
      console.log('show_cart', this.show_cart);
    }
  }
  get show_cart() {
    return this.cartService.show_cart;
  }
  get cart() {
    return this.cartService.cart;
  }

  plus(index) {
    if (
      this.cartService.show_cart[index].item_amount <
      this.cartService.show_cart[index].product.stock
    ) {
      this.cartService.cart[index].item_amount++;
      this.cartService.show_cart[index].item_amount++;
    }
  }
  minor(index) {
    if (this.cartService.cart[index].item_amount > 0) {
      this.cartService.cart[index].item_amount--;
      this.cartService.show_cart[index].item_amount--;
    }
  }
  delete_item(index) {
    this.cartService.delete_item(index);
  }
}

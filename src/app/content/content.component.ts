import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  products = this.dataService.products;
  id = '1';
  index = 0;
  item_amount = '1';
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data.id;
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === this.id) {
          this.index = i;
        }
      }
    });
  }

  add_to_cart(id, item_amount) {
    this.cartService.add_to_cart(id, parseInt(item_amount, 10));
  }
}

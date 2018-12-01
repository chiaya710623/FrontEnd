import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

declare let $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  id = '1';
  item_amount = '1';
  product: any = {};
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data.id;
      console.log(this.id);
    });
    this.productsService.getProduct(this.id).subscribe((data: any) => {
      this.product = data.data[0];
      console.log(this.product);
    });
    $(document).ready(function() {
      // 書籍介紹用的
      $('#horizontalTab').easyResponsiveTabs({
        type: 'default', // Types: default, vertical, accordion
        width: 'auto', // auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function(event) {
          // Callback function if tab is switched
          const $tab = $(this);
          const $info = $('#tabInfo');
          const $name = $('span', $info);
          $name.text($tab.text());
          $info.show();
        }
      });
      $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
      });
      // Can also be used with $(document).ready()

      $('.flexslider').flexslider({
        animation: 'slide',
        controlNav: 'thumbnails'
      });
    });
  }

  add_to_cart(id, item_amount) {
    this.cartService.add_to_cart(id, parseInt(item_amount, 10));
  }
}

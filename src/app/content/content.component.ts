import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  products = this.dataService.products;
  id = '1';
  index = 0;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data.id;
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === this.id) {
          this.index = i;
        }
      }
      console.log(this.id);
      console.log(this.index);
    });
  }

  add_to_cart() {}
}

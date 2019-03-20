import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  products:Array<object>;
  constructor(private productService: ProductService) {
    this.products = this.productService.products;
  }

  ngOnInit() {
  }

  selectProduct(id:number) {
    this.productService.selectProduct(id);
  }

}

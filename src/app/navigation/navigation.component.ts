import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  cartNumber:number;
  constructor(private productService: ProductService) { 
    this.cartNumber = 0;
  }

  ngOnInit() {
    this.cartNumber = this.productService.countProductSelected;
  }
  
  ngDoCheck() {
    console.log(this.productService.countProductSelected);
    this.cartNumber = this.productService.countProductSelected;
  }

}

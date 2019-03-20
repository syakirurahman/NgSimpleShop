import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartItems:Array<any>;
  totalPrice:number;
  constructor(private productService: ProductService) { 
    this.cartItems = this.productService.productSelected;
    this.totalPrice = 0;
  }

  ngOnInit() {
    this.countTotalPrice();
  }

  removeItem(id:number) {
    this.productService.removeProductSelected(id);
    this.totalPrice = 0;
    this.countTotalPrice();
  }

  countTotalPrice() {
    let i:number;
    for (i = 0; i < this.cartItems.length; i++) {
      this.totalPrice += this.cartItems[i].price;
    }
  }
}

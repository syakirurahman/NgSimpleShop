import { Component, OnInit } from '@angular/core';

const cartData = [
  {
    id:1,
    img:'./assets/media/1000-places.jpg',
    title:'1000 Place to See Before You Die',
    author:'Patricia Schultz',
    price:200000,
    selected:true
  },
  {
    id:2,
    img:'./assets/media/the-world.jpg',
    title:'The World - A Traveller Guide to The Planet',
    author:'Lonely Planet',
    price:250000,
    selected:true
  },
  {
    id:3,
    img:'./assets/media/cockpit-confidential.jpg',
    title:'Cockpit Confidential - Everything You Need to Know About Air Travel',
    author:'Patrick Smith',
    price:220000,
    selected:true
  }
];

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartItems:Array<any>;
  countCartItems:number;
  totalPrice:number;
  constructor() { 
    this.cartItems = cartData;
    this.countCartItems = this.cartItems.length;
    this.totalPrice = 0;
  }

  ngOnInit() {
    this.countTotalPrice();
  }

  removeItem(id:number) {
    let itemIndex = this.cartItems.findIndex(item => item.id === id);
    this.cartItems.splice(itemIndex,1);
    this.countCartItems = this.cartItems.length;
    this.totalPrice = 0;
    this.countTotalPrice();
    console.log(itemIndex);
  }

  countTotalPrice() {
    let i:number;
    for (i = 0; i < this.cartItems.length; i++) {
      this.totalPrice += this.cartItems[i].price;
    }
  }
}

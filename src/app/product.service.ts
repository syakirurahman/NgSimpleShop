import { Injectable } from '@angular/core';

const productData = [
  {
    id:1,
    img:'./assets/media/1000-places.jpg',
    title:'1000 Place to See Before You Die',
    author:'Patricia Schultz',
    price:200000,
    selected:false
  },
  {
    id:2,
    img:'./assets/media/the-world.jpg',
    title:'The World - A Traveller Guide to The Planet',
    author:'Lonely Planet',
    price:250000,
    selected:false
  },
  {
    id:3,
    img:'./assets/media/cockpit-confidential.jpg',
    title:'Cockpit Confidential - Everything You Need to Know About Air Travel',
    author:'Patrick Smith',
    price:220000,
    selected:false
  },
  {
    id:4,
    img:'./assets/media/book-of-everything.jpg',
    title:'Book of Everything - The How-to Guide for Travellers',
    author:'Nigel Holmes',
    price:300000,
    selected:false
  },
  {
    id:5,
    img:'./assets/media/sterns-guide.jpg',
    title:'Sterns Guide to Cruise Vacation',
    author:'Steven B. Stern',
    price:280000,
    selected:false
  },
  {
    id:6,
    img:'./assets/media/the-roadtrip-book.jpg',
    title:'The Roadtrip Book - 1001 Drives of Lifetime',
    author:'Darryl Sleath',
    price:270000,
    selected:false
  }
];
interface Product {
  id:number,
  img:string,
  title:string,
  author:string,
  price:number,
  selected:boolean
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products:Array<Product>;
  productSelected:Array<Product>;
  countProductSelected:number;
  constructor() { 
    this.products = productData;
    this.productSelected = [];
    this.countProductSelected = 0;
  }

  selectProduct(id:number) {
    let product = this.products.find(product => product.id === id);
    if(product.selected===false) {
      // Add product to selected list
      this.productSelected.push(product);

      // Mark product as selected
      product.selected = true;
      this.countProductSelected = this.productSelected.length;
      console.log(this.countProductSelected);
    }
  }

  removeProductSelected(id:number) {
    let product = this.products.find(product => product.id === id);

    // Mark product as unselected 
    product.selected = false;

    // Remove product from selected list
    let itemIndex = this.productSelected.findIndex(item => item.id === id);
    this.productSelected.splice(itemIndex,1);
    this.countProductSelected = this.productSelected.length;
  }
}

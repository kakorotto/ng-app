import { Injectable } from '@angular/core';
import { IProduct } from '../IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];

  constructor() {}

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

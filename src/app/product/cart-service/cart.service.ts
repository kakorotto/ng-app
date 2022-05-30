import { Injectable } from '@angular/core';
import { IProduct } from '../IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];
  counts: number[] = [];

  constructor() {}

  addToCart(product: IProduct) {
    if (this.items.indexOf(product) === -1) {
      this.items.push(product);
      this.counts.push(1);
    } else {
      this.counts[this.items.indexOf(product)]++;
    }
  }

  removeFromCart(product: IProduct) {
    if (this.items.indexOf(product) !== -1) {
      this.counts[this.items.indexOf(product)]--;
      if (this.counts[this.items.indexOf(product)] === 0) {
        this.counts.splice(this.items.indexOf(product), 1);
        this.items.splice(this.items.indexOf(product), 1);
      }
    }
  }

  getItems() {
    return { items: this.items, counts: this.counts };
  }

  clearCart() {
    this.items = [];
    this.counts = [];
    return { items: this.items, counts: this.counts };
  }
}

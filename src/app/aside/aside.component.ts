import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/IProduct';
import { CartService } from '../product/cart-service/cart.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  cartItems?: IProduct[];
  cartCounts?: number[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems().items;
    this.cartCounts = this.cartService.getItems().counts;
  }

  deleteFromCart(product: IProduct) {
    this.cartService.removeFromCart(product);
    window.alert('Your product has been removed from the cart!');
  }
}

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';

import { IProduct } from './../IProduct';
import { CartService } from './../cart-service/cart.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input('singleProd') prodData?: IProduct;
  @Input() showDetails = false;
  @Input() added = false;
  @Output() prodSelected: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(
    private location: Location,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private cartService: CartService
  ) {}
  selectProd(e: any) {
    this.prodSelected.emit(this.prodData);
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
  ngOnInit(): void {}
}

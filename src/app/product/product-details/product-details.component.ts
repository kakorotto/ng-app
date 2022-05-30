import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './../IProduct';
import { ProductServicesService } from './../product-service/product-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prod?: IProduct;

  constructor(
    private activeRoute: ActivatedRoute,
    private prodService: ProductServicesService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((pram) => {
      this.prod = this.prodService.getProductById(pram['id']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { IProduct } from './../IProduct';
import { ProductServicesService } from './../product-service/product-services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  prodList?: IProduct[];
  selectedProduct?: IProduct;

  constructor(private prodService: ProductServicesService) {}

  ngOnInit(): void {
    this.prodList = this.prodService.getProdList();
  }

  selectProd(e: any) {
    this.selectedProduct = e;
  }
}

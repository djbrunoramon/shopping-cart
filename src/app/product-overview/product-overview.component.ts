import { Products } from './../model/products';
import { Component, OnInit } from '@angular/core';
import { AppProductsService } from '../services/app-products.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  public products!: Products;

  constructor(private productService: AppProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })

  }
}

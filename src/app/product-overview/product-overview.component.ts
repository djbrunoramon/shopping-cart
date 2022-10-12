import { Products } from './../model/products';
import { Component, OnInit } from '@angular/core';
import { AppProductsService } from '../services/app-products.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  public loading = false;
  public products!: Products;

  constructor(private productService: AppProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.showLoading();
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.hideLoading();
    })

  }

  private showLoading(): void {
    this.loading = true;
  }

  private hideLoading(): void {
    this.loading = false;
  }
}

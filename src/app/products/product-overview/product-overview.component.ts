import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart-service.service';
import { ProductCart } from 'src/app/model/products-cart';
import { Products, Results } from 'src/app/model/products';
import { AppProductsService } from 'src/app/services/app-products.service';
import { CartOverviewComponent } from '../cart-overview/cart-overview.component';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  public loading = false;
  public products!: Products;

  @ViewChild(CartOverviewComponent) cartOverview!: CartOverviewComponent;

  constructor(
    private productService: AppProductsService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public addProductInCart(itemSelected: Results): void {
    const product = this.buildCartProductFromItemSelected(itemSelected);
    this.cartService.addItemInCartList(product);
    this.cartOverview.getAllProductCart();
  }

  private buildCartProductFromItemSelected(item: Results): ProductCart {
    return {
      id: item.id,
      name: item.title,
      price: item.price
    }
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

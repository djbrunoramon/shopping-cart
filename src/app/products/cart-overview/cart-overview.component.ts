import { CartService } from 'src/app/services/cart-service.service';
import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/model/products-cart';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.scss']
})
export class CartOverviewComponent implements OnInit {

  public productCart: ProductCart[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getAllProductCart();
  }

  public clearCartList(): void {
    this.cartService.clearCartList();
    this.getAllProductCart();
  }

  public removeItemFromCartList(item: ProductCart): void {
    this.cartService.removeItemFromCartList(item);
    this.getAllProductCart();
  }

  public getAllProductCart(): void {
    const products: ProductCart[] = this.cartService.getItemsCartList();
    this.productCart = products;
  }
}

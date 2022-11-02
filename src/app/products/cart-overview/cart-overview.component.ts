import { Products } from './../../model/products';
import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/model/products-cart';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.scss']
})
export class CartOverviewComponent implements OnInit {

  public productCart: ProductCart[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getAllProductCart();
  }

  private getAllProductCart(): void {
    const products: ProductCart[] = [
        { id: '100', name: 'Computador', price: 212.32 },
        { id: '101', name: 'Notebook Dell i7', price: 2322.52 },
        { id: '102', name: 'Playstation 5 4k', price: 5000.00 },
    ];

    this.productCart = products;
  }

}

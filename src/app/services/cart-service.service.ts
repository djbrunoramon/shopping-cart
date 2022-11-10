import { ProductCart } from '../model/products-cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly localStoreName = 'cart-list';

  public addItemInCartList(product: ProductCart): void {
    let items = this.getItemsCartList();
    items.push(product);

    localStorage.setItem(this.localStoreName, JSON.stringify(items));
  }

  public getItemsCartList(): ProductCart[] {
    if (localStorage.getItem(this.localStoreName) == null) {
      this.createLocalStorage();
    }

    const items: ProductCart[] = JSON.parse(localStorage.getItem(this.localStoreName)!);

    return items;
  }

  public clearCartList(): void {
    this.createLocalStorage();
  }

  public removeItemFromCartList(item: ProductCart): void {
    let items = this.getItemsCartList();
    items = items.filter(i => !(i.id === item.id));
    localStorage.setItem(this.localStoreName, JSON.stringify(items));
  }

  private createLocalStorage(): void {
    const items: ProductCart[] = [];
    localStorage.setItem(this.localStoreName, JSON.stringify(items));
  }
}

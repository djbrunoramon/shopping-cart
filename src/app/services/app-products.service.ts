import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class AppProductsService {

  private url: string = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Products> {
    return this.http.get<Products>(this.url);
  }
}

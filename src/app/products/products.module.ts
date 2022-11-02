import { ProductRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';

@NgModule({
  declarations: [ProductOverviewComponent, CartOverviewComponent],
  imports: [
    CommonModule, AppMaterialModule, ProductRoutingModule
  ],
  exports: [ProductOverviewComponent, CartOverviewComponent]
})
export class ProductsModule { }

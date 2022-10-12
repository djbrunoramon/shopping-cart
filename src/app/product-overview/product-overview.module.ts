import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ProductRoutingModule } from './app-routing.module';
import { ProductOverviewComponent } from './product-overview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProductOverviewComponent],
  imports: [
    CommonModule, ProductRoutingModule, AppMaterialModule
  ],
  exports: [ProductOverviewComponent]
})
export class ProductOverviewModule { }

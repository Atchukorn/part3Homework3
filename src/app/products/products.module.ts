import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [ProductItemComponent,
    ProductListComponent,
    FormComponent]
})
export class ProductsModule { }

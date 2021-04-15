import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { BackendService } from './backend.service';
import { HomeComponent } from './home/home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { TreeModule } from '@circlon/angular-tree-component';

const routes : Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'productsList', component: ProductListComponent},
  {path: 'productItem', component: ProductItemComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    ProductsModule,
    FormsModule,
    TreeModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, TreeModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule { }

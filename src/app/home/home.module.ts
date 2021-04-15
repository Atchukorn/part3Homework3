import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { Search1Component } from './search1/search1.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import {TreeModule} from '@circlon/angular-tree-component';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NavbarComponent,
    PanelComponent,
    Search1Component,
    MenuComponent,
    ContentComponent,
    HomeComponent,
  ],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule, TreeModule, MatButtonModule,BrowserAnimationsModule
  ],
  exports : [NavbarComponent,
    PanelComponent,
    Search1Component,
    MenuComponent,
    ContentComponent],
})
export class HomeModule { }

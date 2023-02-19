import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/topbar.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductAlertComponent,
  
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

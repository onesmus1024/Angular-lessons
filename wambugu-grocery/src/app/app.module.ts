import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HomeComponent } from './home/home.component';
import { Route, Router, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

let routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'product/add', component: AddproductComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: 'products/:id/edit', component: AddproductComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }

]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    AddproductComponent,
    SingleProductComponent,
    FooterBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

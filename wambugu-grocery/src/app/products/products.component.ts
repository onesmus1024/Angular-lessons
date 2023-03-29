import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../shared/model/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:ProductModel[] = [];

  constructor(private product:ProductService ) { }

  ngOnInit(): void {
    this.products = this.product.getProducts();
  }
  



}

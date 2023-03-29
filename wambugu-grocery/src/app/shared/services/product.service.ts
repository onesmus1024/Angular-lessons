import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:ProductModel[]= [
    new ProductModel(1, 'Product 1', 100, 'Description 1', 'Category 1', 'https://picsum.photos/200/300'),
    new ProductModel(2, 'Product 2', 200, 'Description 2', 'Category 2', 'https://picsum.photos/200/300'),
    new ProductModel(3, 'Product 3', 300, 'Description 3', 'Category 3', 'https://picsum.photos/200/300'),
    new ProductModel(4, 'Product 4', 400, 'Description 4', 'Category 4', 'https://picsum.photos/200/300'),
    new ProductModel(5, 'Product 5', 500, 'Description 5', 'Category 5', 'https://picsum.photos/200/300'),
  ]
  

  constructor() { }


  getProducts():ProductModel[] {
    return this.products;
  }

  getProduct(id:number):ProductModel {
    return this.products.find(product => product.id === id) as ProductModel;
  }

  deleteProduct(id:number):void {
    this.products = this.products.filter(product => product.id !== id);
  }

  addProduct(product:ProductModel):void {
    this.products.push(product);
  }

  updateProduct(product:ProductModel):void {
    const index = this.products.findIndex(p => p.id === product.id);
    this.products[index] = product;
  }

  

}

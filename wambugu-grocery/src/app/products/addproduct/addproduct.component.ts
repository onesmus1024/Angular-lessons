import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  product:ProductModel = new ProductModel(0, '', 0, '', '', '');
  @ViewChild('form') form:NgForm = new NgForm([], []);
  constructor(private products:ProductService,private router:Router) {




   }


  onSubmit():void {
    console.log(this.form.value);
    this.product = {...this.form.value};
    this.products.addProduct(this.product);
    this.form.reset();

    this.router.navigate(['/products']);

    
   
  }
}

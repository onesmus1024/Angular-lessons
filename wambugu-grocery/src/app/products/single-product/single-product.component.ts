import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  @Input() product:ProductModel = new ProductModel(0, '', 0, '', '', '');
}

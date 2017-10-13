
import { Component,Input} from '@angular/core';
import { Product } from './product';

@Component({
    selector:'product-detail',
    template:`
   
    <div *ngIf='product'>
        <h2>{{product.name}} details </h2>
          <div><label>id: </label>{{product.id}}</div>
          <div>
          <label>name:</label>
          <input    [(ngModel)] = 'product.name'    />
           
          </div>
    </div>
    `
})
export class ProductDetail{
    @Input()
    product:Product
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
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
          <button (click)='delete()'>delete</button>
    </div>
    `
})
export class ProductDetail{
    @Input()
    product:Product;
    @Output()
    requestDelete = new EventEmitter<Product>();

    delete(){
        this.requestDelete.emit(this.product);
    }

    
}
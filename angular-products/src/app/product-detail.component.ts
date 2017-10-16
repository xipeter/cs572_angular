
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { Cart } from './cart';

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
          <button (click)='add()'>add to shopping</button>
    </div>
    `
})
export class ProductDetail{
    @Input()
    product:Product;
    @Output()
    requestDelete = new EventEmitter<Product>();
    @Output()
    addtoCart = new EventEmitter<Cart>();
    
    cart = new Cart([],0);


    delete(){
        this.requestDelete.emit(this.product);
    }
    add(){
        // console.log(this.product);
        this.cart.addItem(this.product);
        this.addtoCart.emit(this.cart);


    }

    
}
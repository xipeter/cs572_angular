
import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
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
          <input    [(ngModel)] = 'product.name'    /><br />
          <label>Description:{{product.description}}</label>
          </div>
          <button (click)='delete()'>delete</button>
          <button (click)='add()'>add to shopping</button>
    </div>
    `,
    providers:[Cart]
})
@Injectable()
export class ProductDetail{
    @Input()
    product:Product;
    @Output()
    requestDelete = new EventEmitter<Product>();
    @Output()
    addtoCart = new EventEmitter<Cart>();
    
    // cart = new Cart([],)
    constructor(private cart:Cart){
        
    }



    delete(){
        this.requestDelete.emit(this.product);
    }
    add(){
        this.cart.addItem(this.product);
        this.addtoCart.emit(this.cart);


    }

    
}
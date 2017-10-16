import { ProductService } from './product-data.service';

import { Component,OnInit } from '@angular/core';
import { Product } from './product';
import { Cart } from './cart';



@Component({
  selector: 'my-app',
  template: `

  <h2>My Products</h2>
  <div *ngIf='cart' class="alert alert-danger">
    <h4>Shopping Cart {{cart.Count()}} </h4>
    <a href="#" class="btn btn-primary" (click)='showCart()' >View Cart</a>
  </div>
  <ul class='products'>
   <li *ngFor='let product of productlists' 
   [class.selected]='product===selectedProduct'
   (click)='OnSelect(product)' >
    <span class='badge'>{{product.id}}</span> {{product.name}}
   </li>
  </ul>
  <product-detail [product]='selectedProduct' (requestDelete)='deleteProduct($event)' (addtoCart) = 'loadCart($event)' ></product-detail>
  <cart-detail [newcart] = 'sendcart'></cart-detail>
  `,
  styleUrls:['mystyle.css'],
providers:[ProductService]
})
export class AppComponent implements OnInit { 
  ngOnInit(): void {
    this.getHeros();
  }



  constructor(private productService:ProductService){}
  selectedProduct:Product;
  OnSelect(product:Product):void{
    this.selectedProduct = product;
  }
  productlists:Product[];
  cart:Cart;
  sendcart:Cart;
  getHeros():void{
    this.productService.getProductsSlowly().then(data=>{
      this.productlists = data;
    });
  }
  deleteProduct(event:any){
    this.productlists.pop();
  }

  loadCart(obj:any){
    this.cart = obj;
  }
  showCart(){
    this.sendcart = this.cart;
  }
  
   
  

}

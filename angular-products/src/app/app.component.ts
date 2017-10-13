import { ProductService } from './product-data.service';

import { Component,OnInit } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'my-app',
  template: `

  <h2>My Products</h2>

  <ul class='products'>
   <li *ngFor='let product of productlists' 
   [class.selected]='product===selectedProduct'
   (click)='OnSelect(product)' >
    <span class='badge'>{{product.id}}</span> {{product.name}}
   </li>
  </ul>
  <product-detail [product]='selectedProduct' (requestDelete)='deleteProduct($event)' ></product-detail>
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
  getHeros():void{
    this.productService.getProductsSlowly().then(data=>{
      this.productlists = data;
    });
  }
  deleteProduct(event:any){
    this.productlists.pop();
  }
  
   
  

}

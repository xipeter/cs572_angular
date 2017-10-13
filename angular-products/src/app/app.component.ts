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
  <product-detail [product]='selectedProduct'></product-detail>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .products {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .products li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .products li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .products li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .products .text {
    position: relative;
    top: -3px;
  }
  .products .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
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
  
   
  

}


import { Component } from '@angular/core';
enum kind{new,used,discontinued};
export class Product{
  id:number;
  
  name:string;
  description:string;
  price:number;
  condition: kind ;
  category:string;

}
@Component({
  selector: 'my-app',
  template: `

  <h2>My Products</h2>



  <h2>{{selectedProduct.name}} details </h2>
<div *ngIf='selectedProduct'>
      <div><label>id: </label>{{selectedProduct.id}}</div>
      <div>
      <label>name:</label>
      <input [(ngModel)] = 'selectedProduct.name' />
      </div>
</div>

  <ul class='products'>
   <li *ngFor='let product of productlists' 
   [class.selected]='product===selectedProduct'
   (click)='OnSelect(product)' >
    <span class='badge'>{{product.id}}</span> {{product.name}}
   </li>
  </ul>

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
`]
})
export class AppComponent  { 
  // title = 'My Products';
  // name = 'Computer'; 
  // product:Product = {
  //   id:1,
  //   name:'computer',
  //   description:'my mac',
  //   price:5000.99,
  //   condition: kind.new,
  //   category:'laptop'
  // };

  selectedProduct:Product;
  OnSelect(product:Product):void{
    this.selectedProduct = product;
  }

  objs:Product[] = [
    {
      id:1,name:'computer',
      description:'my mac',
      price:5000.99,
      condition: kind.new,
      category:'laptop'
    },
    {
      id:2,
      name:'iphone',
      description:'my iphone',
      price:3000,
      condition: kind.new,
      category:'cell phone'
    },
    {
      id:3,
      name:'wallet',
      description:'my bag',
      price:1000,
      condition: kind.new,
      category:'bag'
    },
    {
      id:4,
      name:'pen',
      description:'my pen',
      price:200,
      condition: kind.new,
      category:'pen'
    },
    {
      id:5,
      name:'tv',
      description:'my tv',
      price:3200,
      condition: kind.new,
      category:'tv'
    },
    {
      id:6,
      name:'headphone',
      description:'my headphone',
      price:400,
      condition: kind.new,
      category:'headphone'
    }
  ];
  productlists = this.objs;
}

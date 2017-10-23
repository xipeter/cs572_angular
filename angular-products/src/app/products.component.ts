import { ProductService } from './product-data.service';

import { Component,OnInit } from '@angular/core';
import { Product } from './product';
import { Cart } from './cart';
import { Router } from '@angular/router';



@Component({
  selector: 'my-products',
  templateUrl:'./products.component.html',
  styleUrls:['mystyle.css'],
})
export class ProductsComponent implements OnInit { 
  ngOnInit(): void {
    this.getHeros();
  }



  constructor(private productService:ProductService,private router:Router){}
  selectedProduct:Product;
  OnSelect(product:Product):void{
    this.selectedProduct = product;
  }
  productlists:Product[];
  cart:Cart;
  sendcart:Cart;
  isShow:boolean = false;
  getHeros():void{
    // this.productService.getProductsSlowly().then(data=>{
    //   this.productlists = data;
    // });
    this.productService.getProductsV2().then(data=>{
      this.productlists = data;
      console.log(data);
    });
  }
  deleteProduct(event:any){
    this.productlists.pop();
  }

  loadCart(obj:any){
    this.cart = obj;
  }
  showCart(){
    this.isShow = !this.isShow;
  }
  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedProduct.id])
  }
  
   
  

}

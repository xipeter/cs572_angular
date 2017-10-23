
import { Component, Input, Output, EventEmitter, Injectable, OnInit } from '@angular/core';
import { Product } from './product';
import { Cart } from './cart';
import { ProductService } from './product-data.service';
import { ActivatedRoute,ParamMap} from '@angular/router';
import  'rxjs/add/operator/switchMap';
import {Location} from'@angular/common'

@Component({
    selector:'product-detail',
    templateUrl:'./product-detail.component.html',
    providers:[Cart]
})
@Injectable()
export class ProductDetail implements OnInit{
    ngOnInit(): void {
        this.route.paramMap
        .switchMap((para:ParamMap)=>{
            return this.productService.getProduct(+para.get('id'));
        })
        .subscribe(data=>this.product = data);
    }
    constructor(private productService:ProductService,private route:ActivatedRoute,private location:Location,private cart:Cart){}
    goBack(){
        this.location.back();
    }

    @Input()
    product:Product;
    @Output()
    requestDelete = new EventEmitter<Product>();
    @Output()
    addtoCart = new EventEmitter<Cart>();
    




    delete(){
        this.requestDelete.emit(this.product);
    }
    add(){
        this.cart.addItem(this.product);
        this.addtoCart.emit(this.cart);


    }
    save(){
        this.productService.update(this.product).then(()=>this.goBack());
    }

    
}
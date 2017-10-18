import { Products } from './muck-products';
import { Injectable } from '@angular/core'
import { Product } from './product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService{
    getProducts(): Promise< Product[]>{
        return  Promise.resolve(Products) ;
    }

    getProductsSlowly():Promise<Product[]>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.getProducts());
            },2000);
        });
    }

    addProduct(product:Product){
        Products.push(product);
    }
}
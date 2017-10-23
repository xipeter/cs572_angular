import { Products } from './muck-products';
import { Injectable } from '@angular/core'
import { Product } from './product';
import { Observable } from 'rxjs/Rx';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ProductService{
    getProducts(): Promise< Product[]>{
        return  Promise.resolve(Products) ;
    }
    private productUrl = 'api/products';
    constructor(private http:Http){}
    getProductsV2():Promise<Product[]>{
        return this.http.get(this.productUrl)
        .toPromise()
        .then(data=>data.json().data as Product[])
        .catch(this.handleError);
        
    }
    private handleError(error:any):Promise<any>{
        console.error('Error:',error); 
        return  Promise.reject(error);
    }


    //  myobervable:Observable<Product[]> = new Observable(
    //      ober=>{ober.next(Products);}
    //  );
    
    getProductsByoberv():Observable<Product[]>{
        return Observable.of(Products);
    }

    getProductsSlowly():Promise<Product[]>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.getProducts());
            },0);
        });
    }
    getProduct(id:number):Promise<Product>{
        // return this.getProducts().then(products=>products.find(obj=>obj.id==id));
        const url = `${this.productUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(data=>data.json().data as Product)
        .catch(this.handleError);

    }
    private header = new Headers({'Content-Type':'application/json'});
    update(product:Product):Promise<Product>{
        const url = `${this.productUrl}/${product.id}`;
        return this.http.put(url,JSON.stringify(product),{headers:this.header})
        .toPromise()
        .then(()=>product)
        .catch(this.handleError);

    }

    addProduct(product:Product){
        Products.push(product);
    }
}
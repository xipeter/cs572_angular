import { Product } from './product';

export class Cart{
    constructor(private products:Product[],private totalPrice:number){
       
    }
    addItem(product:Product){
        this.products.push(product);
    }
    Count(){
        return this.products.length;
    }
    getItem():Product[]{
        return this.products;
    }
}
import { Product } from './product';

export class Cart{
    
    products:Product[] = [];
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
import { Pipe, PipeTransform } from "@angular/core";
import { Product } from './product';

@Pipe({
    name:'calSub'
})
export class CalculPrice implements PipeTransform {
    transform(obj: Product, counts:number) {
        if(!obj) return 0;
        return obj.price*counts;
    }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from './product-data.service';
import { Product } from './product';

@Component({
    selector:'my-dashboard',
    templateUrl:'./dashboard.component.html'
    // template:`
    //     <h3>My Dashboard</h3>
    // `

})

export class DashboardComponent implements OnInit {
    constructor(private productService:ProductService){}
    products:Product[]=[];
    ngOnInit(): void {
        this.productService.getProductsSlowly().then(data=>{
            this.products = data.slice(1,3);
        });
    }


}
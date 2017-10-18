import { Component } from "@angular/core";
import { ProductService } from "./product-data.service";
import { Product, kind } from "./product";
import { FormGroup, FormControl } from "@angular/forms";
import { ValidateProduct } from "./myvalidator";


@Component({
    selector:'add-product',
    templateUrl:'./add-product.html',
    
})
export class AddProduct{
    productForm = new FormGroup({
        productName:new FormControl('',null,ValidateProduct.unique),
        productDesc:new FormControl()
    });
    temp:Product;
    constructor(private productService:ProductService ){}
    // submit(obj:any){
    //     // console.log(obj);
    //      this.temp  = {
    //         id:5,
    //         name:obj.form.controls.MyGroup.controls.product_Name.value,
    //         description:obj.form.controls.MyGroup.controls.product_desc.value,
    //         price:6000,
    //         condition:kind.new,
    //         category:'test'
    //      };
    //      this.productService.addProduct(this.temp);


        
         submit(obj:any){
            // console.log(obj);
             this.temp  = {
                id:5,
                name:this.productForm.get('productName').value,
                description:this.productForm.get('productDesc').value,
                price:6000,
                condition:kind.new,
                category:'test'
             };
             this.productService.addProduct(this.temp);
         
    }
}
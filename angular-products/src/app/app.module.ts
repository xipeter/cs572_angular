import { ProductDetail } from './product-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { CartDetail } from './cartDetail.component';
import { CalculPrice } from './product-pipe';
import { AddProduct } from './addProduct.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule ,FormsModule,ReactiveFormsModule],




declarations: [ AppComponent,ProductDetail,CartDetail,CalculPrice,AddProduct,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

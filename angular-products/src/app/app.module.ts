import { ProductDetail } from './product-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { CartDetail } from './cartDetail.component';
import { CalculPrice } from './product-pipe';
import { AddProduct } from './addProduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductService } from './product-data.service';
import { RouterModule }  from '@angular/router'
import { DashboardComponent } from './dashboard.component';
import { AppRouting } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



@NgModule({
  imports:      [ BrowserModule ,FormsModule,ReactiveFormsModule,AppRouting, HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)],
declarations: [ AppComponent,ProductDetail,CartDetail,CalculPrice,AddProduct,ProductsComponent,DashboardComponent],
  bootstrap:    [ AppComponent ],
  providers:[ProductService]
})


export class AppModule { }

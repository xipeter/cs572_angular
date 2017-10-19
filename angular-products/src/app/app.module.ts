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

@NgModule({
  imports:      [ BrowserModule ,FormsModule,ReactiveFormsModule,

RouterModule.forRoot([
    {
      path:'products',
      component:ProductsComponent
    },{
      path:'dashboard',
      component:DashboardComponent
    },{
      path:'',
      redirectTo:'/dashboard',
      pathMatch:'full'
    }

  ])
  ],

declarations: [ AppComponent,ProductDetail,CartDetail,CalculPrice,AddProduct,ProductsComponent,DashboardComponent],
  bootstrap:    [ AppComponent ],
  providers:[ProductService]
})


export class AppModule { }

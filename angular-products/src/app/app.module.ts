import { ProductDetail } from './product-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { CartDetail } from './cartDetail.component';
import { CalculPrice } from './product-pipe';


@NgModule({
  imports:      [ BrowserModule ,FormsModule],


declarations: [ AppComponent,ProductDetail,CartDetail,CalculPrice],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

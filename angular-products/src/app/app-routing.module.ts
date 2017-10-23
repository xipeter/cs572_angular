import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductsComponent } from "./products.component";
import { DashboardComponent } from "./dashboard.component";
import { ProductDetail } from "./product-detail.component";



const routes:Routes = [
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
      },{
        path:'detail/:id',
        component:ProductDetail
      }
];
@NgModule({
    imports:[ RouterModule.forRoot(routes) ],
    exports:[RouterModule]
})
export class AppRouting{}
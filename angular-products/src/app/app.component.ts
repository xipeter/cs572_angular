
import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`
    <nav>
        <a routerLink = '/dashboard'>Dashboard</a>
        <a routerLink='/products'>Products</a>
    </nav>
    <router-outlet></router-outlet>
    
    `

})

export class AppComponent{

}
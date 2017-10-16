import { Component, Input } from '@angular/core';
import { Cart } from './cart';
import { Product } from './product';
import { CalculPrice} from './product-pipe'


@Component({
selector:'cart-detail',
template:`
<div *ngIf='newcart'>
<table class="table">
<thead>
  <tr>
    <th>#</th>
    <th>Product Name</th>
    <th>Count</th>
    <th>Price</th>
    <th>Sub Price</th>
  </tr>
</thead>
<tbody>

  <tr *ngFor='let product of newcart.getItem()'>
    <td >1</td>
    <td>{{product.name}}</td>
    <td>1</td>
    <td>{{product.price}}</td>
    <td>{{product|calSub:2}}</td>
  </tr>

</tbody>
</table>
</div>
`
})

export class CartDetail{
@Input()
newcart:Cart;


}
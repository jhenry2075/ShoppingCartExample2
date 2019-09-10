import { Component, OnInit } from '@angular/core';
import { Basket } from '../model/Basket';
import { IStoreService } from '../services/store.service';
import { Store } from '../services/mock-store.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {

  constructor(private store: Store) {
  }

  public getBaskets() {
    return this.store.getBaskets();
  }

  ngOnInit() {
    console.clear();

    let i = 0;
    let baskets = this.store.getBaskets();
    baskets.forEach((basket, basketIndex, basketArray) => {
      console.log(`Output ${ ++i }`);
      
      let lineItems = basket.getLineItems();
      lineItems.forEach((lineItem, lineItemIndex, lineItemArray) => {
        console.log(`\t${lineItem.quantity} ${lineItem.product.description}: ${lineItem.totalPrice}`);
      });
    });
  }
}

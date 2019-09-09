import { Component } from '@angular/core';

import { Product } from '../model/product';
import { Basket } from '../model/basket';
// import {IStoreService} from '../services/store.service';
import { Store } from '../services/mock-store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    public products: Product[];
    private basket: Basket;
    private productsInCart: Map<string, number> = new Map<string, number>();

    constructor(private store: Store) {
      this.products = store.getAvailableProducts();
    }

  isItemInCart(product: Product) {
    return this.productsInCart.has(product.description);
  }

  getItemQuantity(product: Product): string {
    let quantityText = '';
    if (this.isItemInCart(product)) {
      quantityText = this.productsInCart.get(product.description).toString();
    }
    return quantityText;
  }

  addToCart(product: Product) {
    if (this.basket === undefined) {
      this.basket = this.store.createBasket();
    }

    const quantity = this.basket.addProduct(product);
    this.productsInCart.set(product.description, quantity);
  }

  removeFromCart(product: Product) {
    const quantity = this.basket.removeProduct(product);
    if (quantity === 0) {
      this.productsInCart.delete(product.description);
    } else {
      this.productsInCart.set(product.description, quantity);
    }
  }
}

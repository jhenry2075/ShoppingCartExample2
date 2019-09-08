import {IStoreService} from "./store.service"
import {Product, Category} from "../model/product"
import {Basket} from "../model/basket"
import { PRODUCTS } from "./mock-products";

import { Injectable } from '@angular/core';

@Injectable(
    providedIn: 'root'
)
export class Store {

    private salesTax:number = 0.10;
    private importDuty:number = 0.05;
    private exemptedCategories:Category[] = [Category.Candy, Category.Popcorn, Category.Coffee];

    private availableProducts:Product[];
    private baskets:Basket[] = [];

    public constructor() {
        alert('store constructor called');
        this.availableProducts = PRODUCTS;
    }

    public getAvailableProducts():Product[]{
        return this.availableProducts;
    }

    public getBaskets():Basket[]{
        return this.baskets;
    }

    public createBasket():Basket {
        let basket = new Basket(this, "Shopping Basket " + this.baskets.length + 1);
        this.baskets.push(basket);
        return basket;
    }

    public calculateSalesTax(product:Product):number {
        let tax:number = 0;
        let foundCategory = this.exemptedCategories.find(c => c == product.category);
        if (foundCategory != null) {
            tax = product.price * tax;
        }
        return tax;
    }

    public calculateImportDuty(product:Product):number {
        return product.price * this.importDuty;
    }
}
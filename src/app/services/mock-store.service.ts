// import {IStoreService} from './store.service';
import {Product, Category} from '../model/product';
import {Basket} from '../model/basket';
import { PRODUCTS } from './mock-products';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Store {

    private salesTaxRate = 0.10;
    private importDutyRate = 0.05;
    private exemptedCategories: Category[] = [Category.Candy, Category.Popcorn, Category.Coffee];

    private availableProducts: Product[];
    private baskets: Basket[] = [];

    public constructor() {
        this.availableProducts = PRODUCTS;
    }

    public getAvailableProducts(): Product[] {
        return this.availableProducts;
    }

    public getBaskets(): Basket[] {
        return this.baskets;
    }

    public createBasket(): Basket {
        const basket = new Basket(this, 'Shopping Basket ' + (this.baskets.length + 1));
        this.baskets.push(basket);
        return basket;
    }

    public calculateSalesTax(product: Product): number {
        let tax = 0;
        let salesTax = 0;
        let importDuty = 0;

        // Implement Requirement 1.
        // Basic sales tax is applicable at a rate of 10% on all goods,
        // except candy, popcorn and coffee, which are exempt.
        const foundCategory = this.exemptedCategories.find(c => c === product.category);
        if (foundCategory === null || foundCategory === undefined) {
            salesTax = product.price * this.salesTaxRate;
        }

        // Implement Requirement 2.
        // Import duty is an additional sales tax applicable on all imported goods
        // at a rate of 5%, with no exemptions.
        importDuty = product.price * (product.imported ? this.importDutyRate : 0);

        // Implement Requirement 4.
        // Sales tax is rounded up to the nearest multiple of $0.05.
        // This rounding is done by item, by type of tax (basic sales and import duty)
        salesTax = Math.ceil(salesTax / 0.05) * 0.05;
        importDuty = Math.ceil(importDuty / 0.05) * 0.05;

        tax = salesTax + importDuty;
        return tax;
    }
}

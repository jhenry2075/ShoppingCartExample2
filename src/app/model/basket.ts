import {Product} from './product';
import {IStoreService} from '../services/store.service';

export class Basket {

    private products = new Map<Product, number>();
    private name: string;

    constructor(private store: IStoreService, name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public addProduct(product: Product): number {
        let quantity = 1;
        if (this.products.has(product)) {
            quantity = this.products.get(product);
            this.products.set(product, ++quantity);
        } else {
            this.products.set(product, quantity);
        }
        return quantity;
    }

    public removeProduct(product: Product): number {
        let quantity = 0;
        if (this.products.has(product)) {
            quantity = this.products.get(product);
            this.products.set(product, --quantity);
        }
        return quantity;
    }

    public getLineItems() {
        const array = new Array();
        this.products.forEach((q, p) => {
            const lineItem = {
                quantity: q,
                product: p,
                totalPrice: q * (p.price + this.store.calculateSalesTax(p))
            };
            array.push(lineItem);
        });
        return array;
    }

    public getTotal() {
        let total = 0;
        this.products.forEach((quantity, product) => {
            total += (quantity * (product.price + this.store.calculateSalesTax(product)));
        });
        return total;
    }

    public getTotalSalesTax() {
        let total = 0;
        this.products.forEach((quantity, product) => {
            total += (quantity * this.store.calculateSalesTax(product));
        });
        return total;
    }
}

// export class LineItem {
//     quantity:number;
//     totalPrice:number;
//     product:Product;
// }

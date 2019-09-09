import {Product, Category} from '../model/product';
import {Basket} from '../model/basket';


export interface IStoreService {
    getAvailableProducts(): Product[];

    getBaskets(): Basket[];

    createBasket(): Basket;

    calculateSalesTax(product: Product): number;
}

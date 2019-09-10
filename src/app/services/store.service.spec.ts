import {Basket} from '../model/basket';
import {Product} from '../model/product';
import {PRODUCTS} from './mock-products';
import {Store} from './mock-store.service';

describe('Testing the Store', () => {
    it('Store.createBasket should create only one basket', () => {
      const store: Store = new Store();
      store.createBasket();
      const baskets = store.getBaskets();
      expect(baskets.length).toBe(1);
    });

    it('Basket 1 should contain three products', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[0]);
      basket.addProduct(PRODUCTS[1]);
      basket.addProduct(PRODUCTS[2]);
      expect(basket.getLineItems().length).toBe(3);
    });

    it('Basket 1 line one should have a total of 16.00', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[0]);
      basket.addProduct(PRODUCTS[1]);
      basket.addProduct(PRODUCTS[2]);
      expect(basket.getLineItems()[0].totalPrice).toBe(16.00);
    });

    it('Basket 1 line two should have a total of 109.99', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[0]);
      basket.addProduct(PRODUCTS[1]);
      basket.addProduct(PRODUCTS[2]);
      expect(basket.getLineItems()[1].totalPrice).toBe(109.99);
    });

    it('Basket 1 line three should have a total of 0.99', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[0]);
      basket.addProduct(PRODUCTS[1]);
      basket.addProduct(PRODUCTS[2]);
      expect(basket.getLineItems()[2].totalPrice).toBe(0.99);
    });

    it('Basket 1 should have a total tax of 10.00', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[0]);
      basket.addProduct(PRODUCTS[1]);
      basket.addProduct(PRODUCTS[2]);
      const tax0 = store.calculateSalesTax(basket.getLineItems()[0].product);
      const tax1 = store.calculateSalesTax(basket.getLineItems()[1].product);
      const tax2 = store.calculateSalesTax(basket.getLineItems()[2].product);
      const totalTax = tax0 + tax1 + tax2;
      expect(totalTax).toBe(10.00);
    });

    it('Basket 1 should have a total of 126.98', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[0]);
      basket.addProduct(PRODUCTS[1]);
      basket.addProduct(PRODUCTS[2]);
      const total0 = basket.getLineItems()[0].totalPrice;
      const total1 = basket.getLineItems()[1].totalPrice;
      const total2 = basket.getLineItems()[2].totalPrice;
      const total = total0 + total1 + total2;
      expect(basket.getTotal()).toBe(126.98);
    });

    it('Basket 2 should contain two products', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[3]);
      basket.addProduct(PRODUCTS[4]);
      expect(basket.getLineItems().length).toBe(2);
    });

    it('Basket 2 line one should have a total of 11.55', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[3]);
      basket.addProduct(PRODUCTS[4]);
      expect(basket.getLineItems()[0].totalPrice).toBe(11.55);
    });

    it('Basket 2 line two should have a total of 17,251.50', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[3]);
      basket.addProduct(PRODUCTS[4]);
      expect(basket.getLineItems()[1].totalPrice).toBe(17251.50);
    });

    it('Basket 2 should have a total tax of 2250.80', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[3]);
      basket.addProduct(PRODUCTS[4]);
      const tax0 = store.calculateSalesTax(basket.getLineItems()[0].product);
      const tax1 = store.calculateSalesTax(basket.getLineItems()[1].product);
      const totalTax = tax0 + tax1;
      expect(totalTax).toBe(2250.80);
    });

    it('Basket 1 should have a total of 126.80', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[3]);
      basket.addProduct(PRODUCTS[4]);
      const total0 = basket.getLineItems()[0].totalPrice;
      const total1 = basket.getLineItems()[1].totalPrice;
      const total = total0 + total1;
      expect(total).toBe(17263.05);
    });

    it('Basket 3 should contain four products', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[5]);
      basket.addProduct(PRODUCTS[6]);
      basket.addProduct(PRODUCTS[7]);
      basket.addProduct(PRODUCTS[8]);
      expect(basket.getLineItems().length).toBe(4);
    });

    it('Basket 3 line one should have a total of 79.79', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[5]);
      basket.addProduct(PRODUCTS[6]);
      basket.addProduct(PRODUCTS[7]);
      basket.addProduct(PRODUCTS[8]);
      expect(basket.getLineItems()[0].totalPrice).toBe(79.79);
    });

    it('Basket 3 line two should have a total of 60.50', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[5]);
      basket.addProduct(PRODUCTS[6]);
      basket.addProduct(PRODUCTS[7]);
      basket.addProduct(PRODUCTS[8]);
      expect(basket.getLineItems()[1].totalPrice).toBe(60.50);
    });

    it('Basket 3 line three should have a total of 11.50', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[5]);
      basket.addProduct(PRODUCTS[6]);
      basket.addProduct(PRODUCTS[7]);
      basket.addProduct(PRODUCTS[8]);
      expect(basket.getLineItems()[2].totalPrice).toBe(11.50);
    });

    it('Basket 3 line four should have a total of 997.99', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[5]);
      basket.addProduct(PRODUCTS[6]);
      basket.addProduct(PRODUCTS[7]);
      basket.addProduct(PRODUCTS[8]);
      expect(basket.getLineItems()[3].totalPrice).toBe(997.99);
    });

    it('Basket 3 should have a total tax of 2250.80', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[5]);
      basket.addProduct(PRODUCTS[6]);
      basket.addProduct(PRODUCTS[7]);
      basket.addProduct(PRODUCTS[8]);
      const tax0 = store.calculateSalesTax(basket.getLineItems()[0].product);
      const tax1 = store.calculateSalesTax(basket.getLineItems()[1].product);
      const tax2 = store.calculateSalesTax(basket.getLineItems()[2].product);
      const tax3 = store.calculateSalesTax(basket.getLineItems()[3].product);
      const totalTax = tax0 + tax1 + tax2 + tax3;
      expect(totalTax).toBe(10.80);
    });

    it('Basket 3 should have a total of 1149.78', () => {
      const store: Store = new Store();
      const basket = store.createBasket();
      basket.addProduct(PRODUCTS[5]);
      basket.addProduct(PRODUCTS[6]);
      basket.addProduct(PRODUCTS[7]);
      basket.addProduct(PRODUCTS[8]);
      const total0 = basket.getLineItems()[0].totalPrice;
      const total1 = basket.getLineItems()[1].totalPrice;
      const total2 = basket.getLineItems()[2].totalPrice;
      const total3 = basket.getLineItems()[3].totalPrice;
      const total = total0 + total1 + total2 + total3;
      expect(total).toBe(1149.78);
    });

  });

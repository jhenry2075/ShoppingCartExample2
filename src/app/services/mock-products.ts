import { Product, Category } from '../model/product';

export const PRODUCTS: Product[] = [
    new Product('16 lb bag of Skittles', 16.00, Category.Candy, './assets/skittles.jpg', false),
    new Product('Walkman', 99.99, Category.Electronics, 'assets/walkman.png', false),
    new Product('bag of microwave Popcorn', 0.99, Category.Popcorn, './assets/popcorn.jpg', false),
    new Product('imported bag of Vanilla-Hazelnut Coffee', 11.00, Category.Coffee, './assets/vanilla-hazelnut.jpg', true),
    new Product('Imported Vespa', 15001.25, Category.Electronics, './assets/vespa.jpg', true),
    new Product('imported crate of Almond Snickers', 75.99, Category.Candy, './assets/snickers.jpg', true),
    new Product('Discman', 55.00, Category.Electronics, './assets/discman.png', false),
    new Product('Imported Bottle of Wine', 10.00, Category.Wine, './assets/wine.png', true),
    new Product('300# bag of Fair-Trade Coffee', 997.99, Category.Candy, './assets/fairtrade-coffee.png', false),
];

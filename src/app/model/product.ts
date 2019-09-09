export class Product {
    description: string;
    price: number;
    category: Category;
    url: string;
    imported: boolean;

    constructor(description, price, category, url?, imported?) {
        this.description = description;
        this.price = price;
        this.category = category;
        this.url = url;
        this.imported = imported;
    }
}

export enum Category {
    Candy,
    Popcorn,
    Coffee,
    Electronics,
    Wine
}

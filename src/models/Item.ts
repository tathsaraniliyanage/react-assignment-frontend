export class Item {
    id: number;
    name: string;
    quantity: number;
    price: string;

    constructor(name: string,quantity: number, price: string) {
        this.name = name;
        this.quantity=quantity;
        this.price = price;
    }
}
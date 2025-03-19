
interface Info {
    wax: string;
    fragrance: string;
    burnTime: string;
    dimensions: string;
    weight: string;
}

export default class Product {
    constructor(
        private _title: string,
        private _price: number,
        private _image: string,
        private _description: Info ) {
            this._id = Math.random().toString(36).substr(2, 9);
        }
    private _id;
    private _quantity: number = 0;
    get id () { return this._id; }
    get title () { return this._title; }
    get price () { return this._price; }
    set price (newPrice: number) { this._price = newPrice; }
    get quantity () { return this._quantity; }
    set quantity (newQuantity: number) { this._quantity = newQuantity; }
    get src () { return this._image; }
    get info () { return this._description; }
    
    logProduct() {
        console.log(`Product: ${this.title}\nPrice: ${this.price}`);
    }
}
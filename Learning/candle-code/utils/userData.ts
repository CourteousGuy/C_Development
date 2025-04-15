export class Subscription {
    constructor(
        public id: number,
        public nextDelivery: Date,
        public amountDue: number,
        public interval: number
    ) {}
}

export class CartItem {
    constructor(
        public id: number,
        public price: number,
        public quantity: number
    ) {}
}
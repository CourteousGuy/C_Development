import './cart.css';
import { useEffect, useState } from 'react';
import { create } from 'zustand';
import Product from '../../components/product';
import Button from '../../util/button';
import QuantityCounter from '../../components/quantityCounter';

interface CartItemProps {
    product: Product;
    removeProduct: (product: Product) => void;
    reload: () => void;
}

function CartItem({product, removeProduct, reload}: CartItemProps) {
    const [quantity, setQuantity] = useState(product.quantity);

    useEffect(() => {
        product.quantity = quantity;
        reload();
    }, [quantity]);

    function handleClick() {
        console.log('Removing product from cart:', product.title);
        removeProduct(product);
    }

    return (
        <>
            <div className="cart__item__product">
                <img src={product.src} alt="Product Image" />
                <div>
                    <h2>{product.title}</h2>
                    <a onClick={handleClick}>Remove</a>
                </div>
                
            </div>
            <div className="cart__item__price">$ {product.price}</div>
            <div className="cart__item__quantity"><QuantityCounter quantity={quantity} setQuantity={setQuantity} /></div>
            <div className="cart__item__total">$ {(product.price * quantity).toFixed(2)}</div>
        </>
    )
}

const testProduct1 = new Product(
    '1 Spiced Mint Candleaf®',
    9.99,
    'src\\assets\\images\\product-image-big.png',
    {
        wax: 'Top grade Soy wax that delivers a smoke-less, consistent burn',
        fragrance: 'Premium quality ingredients with natural essential oils',
        burnTime: '70-75 hours',
        dimensions: '10cm x 5cm',
        weight: '400g'
    }
);

const testProduct2 = new Product(
    '2 Spiced Mint Candleaf®',
    9.99,
    'src\\assets\\images\\product-image-big.png',
    {
        wax: 'Top grade Soy wax that delivers a smoke-less, consistent burn',
        fragrance: 'Premium quality ingredients with natural essential oils',
        burnTime: '70-75 hours',
        dimensions: '10cm x 5cm',
        weight: '400g'
    }
);

const testProduct3 = new Product(
    '3 Spiced Mint Candleaf®',
    9.99,
    'src\\assets\\images\\product-image-big.png',
    {
        wax: 'Top grade Soy wax that delivers a smoke-less, consistent burn',
        fragrance: 'Premium quality ingredients with natural essential oils',
        burnTime: '70-75 hours',
        dimensions: '10cm x 5cm',
        weight: '400g'
    }
);

let cart: Product[] = [];

const addProductToCart = (product: Product, quantity: number) => {
    product.quantity = quantity;
    cart.push(product);
}

addProductToCart(testProduct1, 1);
addProductToCart(testProduct2, 2);
addProductToCart(testProduct3, 1);

export default function Cart() {
    const [total, setTotal] = useState(0);

    const removeProductFromCart = (product: Product) => {
        const index = cart.indexOf(product);
        if (index > -1) {
            cart.splice(index, 1);
        }
        reload();
    }

    // NOTE: I feel like there is a better way to do this.
    function reload() {
        setTotal(cart.reduce((acc, product) => acc + product.price * product.quantity, 0));
    }

    return (
        <div className="cart">
            <h2>Your cart items</h2>
            <a href="/main">Back to shopping</a>
            <div className="cart__table">
                <div className="cart__header-product">Product</div>
                <div className="cart__header-price">Price</div>
                <div className="cart__header-quantity">Quantity</div>
                <div className="cart__header-total"><span>Total</span></div>
                <div className="cart__separator"></div>
                {cart.map((product) => <CartItem key={product.id} product={product} removeProduct={removeProductFromCart} reload={reload} />)}
            </div>
            <div className="cart__total">
                <div className="cart__separator"></div>
                <div className="cart__total__summary">
                    <div className="cart__total__summary__cost">
                        <p className="cart__total__summary__label">Sub-total</p>
                        <p className="cart__total__summary__value">$ {total.toFixed(2)}</p>
                    </div>
                    <p>Tax and shipping cost will be calculated later</p>
                </div>
                <Button id="checkout" content="Check-out" />
            </div>
        </div>
    )
}
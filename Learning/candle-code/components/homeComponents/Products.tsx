import styles from './modules/Products.module.css'
import Header from '../../utils/header';
import ProductCard from '../../utils/product-card';

export default function Products() {
    return (
        <div className={styles.products}>
            <Header
                title="Products"
                description="Order it for you or for your beloved ones"
            />
            <div className={styles.products__cardholder}>
                {/* WILL UPDATE THIS TO DRAW PRODUCTS FROM SERVER AND MAP THEM TO THIS SECTION */}
                <div className={styles.products__cardholder__row}>
                    <ProductCard
                        id="4464"
                        img="candles-coloured/spiced-mint.png"
                        title="Spiced Mint"
                        price="9.99$"
                    />
                    <ProductCard
                        id="4d6b"
                        img="candles-coloured/sweet-strawberry.png"
                        title="Sweet Strawberry"
                        price="9.99$"
                    />
                    <ProductCard
                        id="r498"
                        img="candles-coloured/cool-blueberries.png"
                        title="Cool Blueberries"
                        price="9.99$"
                    />
                    <ProductCard
                        id="f8mc"
                        img="candles-coloured/juicy-lemon.png"
                        title="Juicy Lemon"
                        price="9.99$"
                    />
                </div>
                <div className={styles.products__cardholder__row}>
                    <ProductCard
                        id="50ky"
                        img="candles-coloured/fresh-orange.png"
                        title="Product name"
                        price="9.99$"
                    />
                    <ProductCard
                        id="c0q8"
                        img="candles-coloured/fragrant-cinnamon.png"
                        title="Fragrant Cinnamon"
                        price="9.99$"
                    />
                    <ProductCard
                        id="a9kv"
                        img="candles-coloured/summer-cherries.png"
                        title="Summer Cherries"
                        price="9.99$"
                    />
                    <ProductCard
                        id="v459"
                        img="candles-coloured/clean-lavender.png"
                        title="Clean Lavender"
                        price="9.99$"
                    />
                </div>
            </div>
        </div>
    );
}
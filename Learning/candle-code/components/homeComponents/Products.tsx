import styles from './modules/Products.module.css'
import Header from '@/components/header';
import ProductCard from '@/components/product-card';
import spicedMintImage from '@/public/candles-coloured/spiced-mint.png';
import sweetStrawberryImage from '@/public/candles-coloured/sweet-strawberry.png';
import coolBlueberriesImage from '@/public/candles-coloured/cool-blueberries.png';
import juicyLemonImage from '@/public/candles-coloured/juicy-lemon.png';
import freshOrangeImage from '@/public/candles-coloured/fresh-orange.png';
import fragrantCinnamonImage from '@/public/candles-coloured/fragrant-cinnamon.png';
import summerCherriesImage from '@/public/candles-coloured/summer-cherries.png';
import cleanLavenderImage from '@/public/candles-coloured/clean-lavender.png';

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
                        img={spicedMintImage}
                        title="Spiced Mint"
                        price="9.99$"
                    />
                    <ProductCard
                        id="4d6b"
                        img={sweetStrawberryImage}
                        title="Sweet Strawberry"
                        price="9.99$"
                    />
                    <ProductCard
                        id="r498"
                        img={coolBlueberriesImage}
                        title="Cool Blueberries"
                        price="9.99$"
                    />
                    <ProductCard
                        id="f8mc"
                        img={juicyLemonImage}
                        title="Juicy Lemon"
                        price="9.99$"
                    />
                </div>
                <div className={styles.products__cardholder__row}>
                    <ProductCard
                        id="50ky"
                        img={freshOrangeImage}
                        title="Product name"
                        price="9.99$"
                    />
                    <ProductCard
                        id="c0q8"
                        img={fragrantCinnamonImage}
                        title="Fragrant Cinnamon"
                        price="9.99$"
                    />
                    <ProductCard
                        id="a9kv"
                        img={summerCherriesImage}
                        title="Summer Cherries"
                        price="9.99$"
                    />
                    <ProductCard
                        id="v459"
                        img={cleanLavenderImage}
                        title="Clean Lavender"
                        price="9.99$"
                    />
                </div>
            </div>
        </div>
    );
}
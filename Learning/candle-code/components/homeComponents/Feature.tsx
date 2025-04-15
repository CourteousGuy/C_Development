import styles from './modules/Feature.module.css';
import Header from '@/components/header';
import ProductCard from '@/components/product-card';
import spicedMintImage from '@/public/candles-coloured/spiced-mint.png';
import sweetStrawberryImage from '@/public/candles-coloured/sweet-strawberry.png';
import coolBlueberriesImage from '@/public/candles-coloured/cool-blueberries.png';
import juicyLemonImage from '@/public/candles-coloured/juicy-lemon.png';

export default function Feature() {
    return (
        <div className={styles.feature}>
            <Header
                title='Popular'
                description='Our top selling product that you may like'
            />
            <div className={styles.feature__products}>
                <ProductCard
                    id="4464"
                    img={spicedMintImage}
                    title='Spiced Mint'
                    price='9.99$'
                />
                <ProductCard
                    id='4d6b'
                    img={sweetStrawberryImage}
                    title='Sweet Strawberry'
                    price='9.99$'
                />
                <ProductCard
                    id='r498'
                    img={coolBlueberriesImage}
                    title='Cool Blueberries'
                    price='9.99$'
                />
                <ProductCard
                    id='f8mc'
                    img={juicyLemonImage}
                    title='Juicy Lemon'
                    price='9.99$'
                />
            </div>
        </div>
    );
}
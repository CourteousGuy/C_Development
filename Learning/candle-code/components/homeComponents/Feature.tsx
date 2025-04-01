import styles from './modules/Feature.module.css';
import Header from '@/utils/header';
import ProductCard from '@/utils/product-card';

export default function Popular() {
    return (
        <div className={styles.feature}>
            <Header
                title='Popular'
                description='Our top selling product that you may like'
            />
            <div className={styles.feature__products}>
                <ProductCard
                    id="4464"
                    img='candles-coloured/spiced-mint.png'
                    title='Spiced Mint'
                    price='9.99$'
                />
                <ProductCard
                    id='4d6b'
                    img='candles-coloured/sweet-strawberry.png'
                    title='Sweet Strawberry'
                    price='9.99$'
                />
                <ProductCard
                    id='r498'
                    img='candles-coloured/cool-blueberries.png'
                    title='Cool Blueberries'
                    price='9.99$'
                />
                <ProductCard
                    id='f8mc'
                    img='candles-coloured/juicy-lemon.png'
                    title='Juicy Lemon'
                    price='9.99$'
                />
            </div>
        </div>
    );
}
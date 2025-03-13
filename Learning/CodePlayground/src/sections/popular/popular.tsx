import './popular.css';
import Header from '../../util/header/header';
import ProductCard from '../../util/product-card/product-card';

export default function Popular() {
    return (
        <div className='popular'>
            <Header
                title='Popular'
                description='Our top selling product that you may like'
            />
            <div className='popular__cardholder'>
                <ProductCard
                    img='src\assets\images\product-image.jpg'
                    title='Spiced Mint'
                    price='9.99$'
                />
                <ProductCard
                    img='src\assets\images\product-image.jpg'
                    title='Sweet Strawberry'
                    price='9.99$'
                />
                <ProductCard
                    img='src\assets\images\product-image.jpg'
                    title='Cool Blueberries'
                    price='9.99$'
                />
                <ProductCard
                    img='src\assets\images\product-image.jpg'
                    title='Juicy Lemon'
                    price='9.99$'
                />
            </div>
        </div>
    );
}
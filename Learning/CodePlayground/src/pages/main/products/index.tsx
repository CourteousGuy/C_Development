import Header from '../../../util/header';
import ProductCard from '../../../util/product-card';
import './products.css';

export default function Products() {
    return (
        <div className="products">
            <div className="products__content">
                <Header
                    title="Products"
                    description="Order it for you or your beloved ones"
                />
                <div className="products__cardholder">
                    <div className='row'>
                        <ProductCard
                            id="4464"
                            img="src\assets\images\product-image.jpg"
                            title="Spiced Mint"
                            price="9.99$"
                        />
                        <ProductCard
                            id="4d6b"
                            img="src\assets\images\product-image.jpg"
                            title="Sweet Strawberry"
                            price="9.99$"
                        />
                        <ProductCard
                            id="r498"
                            img="src\assets\images\product-image.jpg"
                            title="Cool Blueberries"
                            price="9.99$"
                        />
                        <ProductCard
                            id="f8mc"
                            img="src\assets\images\product-image.jpg"
                            title="Juicy Lemon"
                            price="9.99$"
                        />
                    </div>
                    <div className='row'>
                        <ProductCard
                            id="50ky"
                            img="src\assets\images\product-image.jpg"
                            title="Product name"
                            price="9.99$"
                        />
                        <ProductCard
                            id="c0q8"
                            img="src\assets\images\product-image.jpg"
                            title="Fragrant Cinnamon"
                            price="9.99$"
                        />
                        <ProductCard
                            id="a9kv"
                            img="src\assets\images\product-image.jpg"
                            title="Summer Cherries"
                            price="9.99$"
                        />
                        <ProductCard
                            id="v459"
                            img="src\assets\images\product-image.jpg"
                            title="Clean Lavender"
                            price="9.99$"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
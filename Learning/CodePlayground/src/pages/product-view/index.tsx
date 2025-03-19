import './product-view.css';
import { useParams } from 'react-router-dom';
import { PiShoppingCart } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import Product from '../../components/product';
import axios from 'axios';

export default function ProductView() {

    const [isLoading, setLoading] = useState(true);
    const [product, setProduct] = useState<Product | null>(null);

    const { productId } = useParams();

    useEffect(() => {
        axios
            .get('http://localhost:3000/products/' + productId)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        console.log(product);
    }

    return (
        <div className="product-view">
            <div className="product-view__image">
                <img src="http://localhost:5173/public/product-image-big.png" alt="Product Image" />
                <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments. 
                🚚 FREE SHIPPING</p>
            </div>
            <div className="product-view__info">
                <h2 className="product-view__title">{product?.title} Candleaf®</h2>
                <div className="product-view__purchase-options">
                    <div className="product-view__purchase-options-left">
                        <p className="product-view__price">$ {product?.price}</p>
                        <label htmlFor="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="5" />
                    </div>
                    <div className="product-view__purchase-options-right">
                        <form>
                            <input type="radio" id="one-time" name="subscription" value="subscribe-no" />
                            <label htmlFor="one-time">&nbsp;&nbsp;&nbsp;&nbsp;One time purchase</label><br />
                            <input type="radio" id="subscribe" name="subscription" value="subscribe-yes" />
                            <label htmlFor="subscribe">
                                &nbsp;&nbsp;&nbsp;&nbsp;Subscribe and delivery every &nbsp;&nbsp;
                                <select name="time-weeks" id="time-weeks" defaultValue={"week4"}>
                                    <option value="week1">1 week </option>
                                    <option value="week2">2 weeks</option>
                                    <option value="week3">3 weeks</option>
                                    <option value="week4">4 weeks</option>
                                </select><br />

                            </label>
                            <button className="product-view__button"><PiShoppingCart /> + Add to Cart</button>
                        </form>
                    </div>
                </div>
                <p className="product-view__description"></p>
                
                
            </div>
        </div>
    )
}
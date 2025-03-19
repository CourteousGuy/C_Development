import './product-view.css';
import { PiShoppingCart } from 'react-icons/pi';

export default function ProductView() {
    return (
        <div className="product-view">
            <div className="product-view__image">
                <img src='src\assets\images\product-image-big.png' alt="Product Image" />
                <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments. 
                🚚 FREE SHIPPING</p>
            </div>
            <div className="product-view__info">
                <h2 className="product-view__title">Spiced Mint Candleaf®</h2>
                <div className="product-view__purchase-options">
                    <div className="product-view__purchase-options-left">
                        <p className="product-view__price">$ 9.99</p>
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
                                <select name="time-weeks" id="time-weeks">
                                    <option value="week1">1 week </option>
                                    <option value="week2">2 weeks</option>
                                    <option value="week3">3 weeks</option>
                                    <option value="week4" selected>4 weeks</option>
                                </select><br />

                            </label>
                            <button className="product-view__button"><PiShoppingCart /> + Add to Cart</button>
                        </form>
                    </div>
                </div>
                <p className="product-view__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium ab adipisci mollitia distinctio sint fugiat tenetur facere sunt dolorum, eaque alias quae saepe quidem porro, praesentium eum vero officia.</p>
                
                
            </div>
        </div>
    )
}
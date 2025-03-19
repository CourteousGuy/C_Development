import './product-card.css';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    id: string;
    img: string;
    title: string;
    price: string;
}

export default function ProductCard({id, img, title, price}: ProductCardProps) {
    return (
        <Link to={"/product/" + id} className="product">
            <div className="product__image">
                <img src={img} alt="candle"></img>
            </div>
            <p className='product__title'>{title}</p>
            <p className='product__price'>{price}</p>
        </Link>
    );
}
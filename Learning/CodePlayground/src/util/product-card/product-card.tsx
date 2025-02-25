import './product-card.css';

interface ProductCardProps {
    img: string;
    title: string;
    price: string;
}

export default function ProductCard({img, title, price}: ProductCardProps) {
    return (
        <div className="product">
            <div className="product__image">
                <img src={img} alt="candle"></img>
            </div>
            <p className='product__title'>{title}</p>
            <p className='product__price'>{price}</p>
        </div>
    );
}
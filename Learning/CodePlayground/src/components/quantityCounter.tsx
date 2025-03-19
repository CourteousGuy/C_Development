import './styles/quantityCounter.css';
import { PiPlusCircleLight, PiMinusCircleLight } from 'react-icons/pi';

interface QuantityCounterProps {
    quantity: number;
    setQuantity: (num: any) => void;
}

export default function QuantityCounter({quantity, setQuantity}: QuantityCounterProps) {
    
    const handleQuantityChange = (event: any) => {
        const val = event.target.value;
        if (val >= 1 && val <= 99) {
            setQuantity(val);
        } else if (val < 1) {
            setQuantity(1);
        }
    }

    return (
        <div className="quantity-counter">
            <button className="counter__btn" onClick={() => setQuantity((num: number) => num + 1)} disabled={quantity >= 99}><PiPlusCircleLight /></button>
            <label htmlFor="quantity"></label>
            <input className="counter__input" type="number" id="quantity" name="quantity" min="1" max="99" value={quantity} onChange={handleQuantityChange} />
            <button className="counter__btn" onClick={() => setQuantity((num: number) => num - 1)} disabled={quantity <= 1}><PiMinusCircleLight /></button>
        </div>
    )
}
import './heading.css';
import Button from '../../../util/button';

export default function Heading() {
  return (
    <div className="heading">
      <div className="heading__cardholder">
        <h1>🌱</h1>
        <h1>The nature candle</h1>
        <p>All handmade with natural soy wax, Candleaf is a companion for all</p>
        <p>your pleasure moments.</p>
        <Button
          id="heading__button"
          content="Discovery our collection"
        />
      </div>
      <img id="bgn-img" src="src\assets\images\candle-lighting.jpg" alt="background"></img>
    </div>
  );
}
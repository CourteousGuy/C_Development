import './benefits.css';
import Button from '../../../util/button';
import { PiCheckCircleLight } from "react-icons/pi";

const features = [{
    title: "Eco-sustainable:",
    description: "All recycled materials, 0% CO2 emissions."
}, {
    title: "Hyphoallergenic:",
    description: "!00% natural, human friendly ingredients."
}, {
    title: "Handmade:",
    description: "All candles are craftly made with love."
}, {
    title: "Long burning:",
    description: "No more waste. Created for last long."
}];

const listItems = features.map((feature, index) => 
    <p key={index} className="feature__item"><span><PiCheckCircleLight /> </span><b>{feature.title}</b> {feature.description}</p>
);

export default function Benefits() {
  return (
    <div className="benefits">
      <div className="benefits__text-left">
        <h2>Clean and fragrant soy wax</h2>
        <p className="benefits__subtitle">Made for your home and for your wellness</p>
        {listItems}
        <Button
          id="benefits__button"
          content="Learn more"
        />
      </div>
      <div className="benefits__image"><img src="src/assets/images/candles-two.png" alt="two candles" /></div>
    </div>
  );
}
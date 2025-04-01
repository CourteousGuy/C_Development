import { poppins_500, poppins_400 } from '@/app/fonts';
import styles from './modules/Benefits.module.css';
import Button from '@/utils/button';
import { PiCheckCircleLight } from "react-icons/pi";

const features = [{
    title: "Eco-sustainable:",
    description: "All recyclable materials, 0% CO2 emissions."
}, {
    title: "Hyphoallergenic:",
    description: "100% natural, human friendly ingredients."
}, {
    title: "Handmade:",
    description: "All candles are craftly made with love."
}, {
    title: "Long burning:",
    description: "No more waste. Created for last long."
}];

const listItems = features.map((feature, index) => 
    <div key={index} className={styles.feature__item}><span><PiCheckCircleLight /> </span><b>{feature.title}</b> {feature.description}</div>
);

export default function Benefits() {
  return (
    <div className={styles.benefits}>
      <div className={`${styles.benefits__text__left} ${poppins_500.className}`}>
        <div>Clean and <br />fragrant soy wax</div>
        <div className={`${styles.benefits__subtitle} ${poppins_400.className}`}>Made for your home and for your wellness</div>
        {listItems}
        <div className={styles.benefits__button}>
            <Button
            id="benefits__button"
            content="Learn more"
            />
        </div>
        
      </div>
      <div className={styles.benefits__image}><img src="candles-two.png" alt="two candles" /></div>
    </div>
  );
}
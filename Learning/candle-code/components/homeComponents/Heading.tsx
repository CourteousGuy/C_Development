import styles from './modules/Heading.module.css';
import { poppins_500, roboto_400 } from '@/app/fonts';
import Button from '../../utils/button';

export default function Heading() {
  return (
    <div className={styles.heading}>
      <div className={styles.heading__cardholder}>
        <div className={`${styles.heading__emoji} ${poppins_500.className}`}>🌱</div>
        <div className={`${styles.heading__title} ${poppins_500.className}`}>The nature candle</div>
        <div className={`${styles.heading__content} ${roboto_400.className}`}>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments.</div>
        <Button
          id="heading__button"
          content="Discover our collection"
        />
      </div>
      <img id="bgn-img" src="bg-image.jpg" alt="background"></img>
    </div>
  );
}
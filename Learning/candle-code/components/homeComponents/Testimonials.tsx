import { poppins_500, roboto_400 } from '@/app/fonts';
import styles from './modules/Testimonials.module.css';
import Header from '@/utils/header';

function TestimonialCard({ image, rating, quote, name }: { image: string, rating: number, quote: string, name: string }) {
    let ratingString = '';
    for (let i = 0; i < 5; i++) {
        ratingString += i < rating ? '★' : '☆';
    }
    return (
        <div className={styles.testimonial__card}>
            <div className={styles.testimonial__image}>
                <img src={image} alt="person"/>
            </div>
            <div className={styles.testimonial__rating}>{ratingString}</div>
            <div className={`${styles.testimonial__quote} ${poppins_500.className}`}>{quote}</div>
            <div className={`${styles.testimonial__name} ${roboto_400.className}`}>{name}</div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <div className={styles.testimonials}>
            <Header
                title="Testimonials"
                description="Some quotes from our happy customers"
            />
            <div className={styles.testimonials__cards}>
                <TestimonialCard
                    image="person-profile.png"
                    rating={4}
                    quote='"I love it! No more air fresheners"'
                    name="Luisa"
                />
                <TestimonialCard
                    image="person-profile.png"
                    rating={5}
                    quote='"Raccomended for everyone"'
                    name="Edoardo"
                />
                <TestimonialCard
                    image="person-profile.png"
                    rating={4}
                    quote='"Looks very natural, the smell is awesome"'
                    name="Mart"
                />
            </div>
        </div>
    );
}
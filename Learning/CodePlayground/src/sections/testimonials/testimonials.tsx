import './testimonials.css';
import Header from '../../util/header/header';

function TestimonialCard({ image, rating, quote, name }: { image: string, rating: number, quote: string, name: string }) {
    let ratingString = '';
    for (let i = 0; i < 5; i++) {
        ratingString += i < rating ? '★' : '☆';
    }
    return (
        <div className="testimonial__card">
            <div className="testimonial__image">
                <img src={image} alt="person"/>
            </div>
            <p className="testimonial__rating">{ratingString}</p>
            <p className="testimonial__quote">{quote}</p>
            <p className="testimonial__name">{name}</p>
        </div>
    );
}

export default function Testimonials() {
    return (
        <div className="testimonials">
            <Header
                title="Testimonials"
                description="Some quotes from our happy customers"
            />
            <div className="testimonials__cards">
                <TestimonialCard
                    image="src\assets\images\person-profile.png"
                    rating={4}
                    quote='"I love it! No more air fresheners"'
                    name="Luisa"
                />
                <TestimonialCard
                    image="src\assets\images\person-profile.png"
                    rating={5}
                    quote='"Raccomended for everyone"'
                    name="Eduardo"
                />
                <TestimonialCard
                    image="src\assets\images\person-profile.png"
                    rating={4}
                    quote='"Looks very natural, the smell is awesome"'
                    name="Mart"
                />
            </div>
        </div>
    );
}
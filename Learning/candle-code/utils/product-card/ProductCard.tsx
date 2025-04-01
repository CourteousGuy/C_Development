'use client';
import styles from './ProductCard.module.css';
import { poppins_500, roboto_500 } from '@/app/fonts';
import Link from 'next/link';

interface ProductCardProps {
    id: string;
    img: string;
    title: string;
    price: string;
}

export default function ProductCard({id, img, title, price}: ProductCardProps) {
    return (
        <Link href={"/product/" + id} className={`${styles.product} ${poppins_500.className}`}>
            <div className={styles.product__image}>
                <img src={img} alt="candle"></img>
            </div>
            <div className={styles.product__title}>{title}</div>
            <div className={`${styles.product__price} ${roboto_500.className}`}>{price}</div>
        </Link>
    );
}
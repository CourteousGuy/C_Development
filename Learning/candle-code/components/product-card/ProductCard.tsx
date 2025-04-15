'use client';
import styles from './ProductCard.module.css';
import { poppins_500, roboto_500 } from '@/app/fonts';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ProductCardProps {
    id: string;
    img: StaticImageData;
    title: string;
    price: string;
}

export default function ProductCard({id, img, title, price}: ProductCardProps) {
    return (
        <div className={styles.product}>
            <Link href={"/product/" + id} className={`${poppins_500.className}`}>
                <div className={styles.product__image}>
                    <Image src={img} alt="candle" />
                </div>
                <div className={styles.product__title}>{title}</div>
                <div className={`${styles.product__price} ${roboto_500.className}`}>{price}</div>
            </Link>
        </div>
    );
}
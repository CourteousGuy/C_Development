'use client';
import styles from './Button.module.css';
import { roboto_400 } from '@/app/fonts';

interface ButtonProps {
  id: string;
  content: string;
}

export default function Button({ id, content }: ButtonProps) {
  return (
    <div className={styles.button__container}>
      <button id={id} className={`${styles.button} ${roboto_400.className}`}>{content}</button>
    </div>
  );
}
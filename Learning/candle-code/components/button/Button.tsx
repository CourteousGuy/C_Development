'use client';
import styles from './Button.module.css';
import { roboto_400 } from '@/app/fonts';

interface ButtonProps {
  id: string;
  onClick?: ClickHandler;
  padding?: string;
  fill?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

function onClickDefault(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
  console.log('Button clicked!');
}

export default function Button({ id,
    onClick=onClickDefault,
    padding="0",
    fill=false,
    disabled=false,
    children }: ButtonProps) {
  const buttonStyle = `${styles.button} ${roboto_400.className}`
    + (fill ? ` ${styles.button__fill}` : '');
  return (
    <div className={styles.button__container} style={{ padding:`${padding}` }}>
      <button id={id} className={buttonStyle} onClick={onClick}>{children}</button>
    </div>
  );
}
import styles from './Header.module.css';
import { poppins_500 } from '@/app/fonts';

interface HeaderProps {
    title: string;
    description: string;
}

export default function Header({ title, description }: HeaderProps) {
    return (
        <div className={`${styles.header} ${poppins_500.className}`}>
            <div>{title}</div>
            <div className={styles.content}>{description}</div>
        </div>
    );
}

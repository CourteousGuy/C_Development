import styles from "./Navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import { PiUser, PiShoppingCart, PiArrowSquareDown } from "react-icons/pi";
import { poppins_500 } from "@/app/fonts";

export default function Navigation() {
  return (
    <div className={styles.nav}>
        <div className={styles.nav__logo}>
            <div className={styles.nav__logo__img}>
                <Image src="/logo.svg" alt="candleaf-logo" fill />
            </div>
            <div className={`${styles.nav__logo__name} ${poppins_500.className}`}>Candleaf</div>
        </div>
        <div className={styles.nav__links}>
            <Link className={poppins_500.className} href="#">
            Discovery{" "}
            <PiArrowSquareDown className={styles.nav__icon} />
            </Link>
            <Link className={poppins_500.className} href="#">
            About
            </Link>
            <Link className={poppins_500.className} href="#">
            Contact us
            </Link>
        </div>
        <div className={styles.nav__cta}>
            <Link className={poppins_500.className} href="#">
            <PiUser />
            </Link>
            <Link className={poppins_500.className} href="/cart">
            <PiShoppingCart />
            </Link>
        </div>
    </div>
  );
}

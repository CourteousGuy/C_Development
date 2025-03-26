import styles from "./Footer.module.css";
import { poppins_600 } from "@/app/fonts";
import Image from "next/image";

const footerInfo = [{
    section: 'Discovery',
    links: ['New season', 'Most searched', 'Most selled']
}, {
    section: 'About',
    links: ['Help', 'Shipping', 'Affiliate']
}, {
    section: 'Info',
    links: ['Contact us', 'Privacy Policy', 'Terms and Conditions']
}]

const footerTable = footerInfo.map(section => 
    <div key={footerInfo.indexOf(section)} className={styles.footer__column}>
        <div className={styles.footer__column__header}>{section.section}</div>
        {section.links.map(link => <div key={section.links.indexOf(link)} className={styles.footer__column__item}>{link}</div>)}
    </div>
)

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer__content}>
                    <div className={styles.footer__left}>
                        <div className={styles.footer__logo}><Image src="/icon-footer.png" alt="Candleaf logo" width="63" height="63" /><div className={poppins_600.className}>Candleaf</div></div>
                        <div className={styles.footer__slogan}>Your natural candle made for your home and for your wellness.</div>
                    </div>
                    <div className={styles.footer__right}>
                        {footerTable}
                    </div>
                </div>
            </div>
            <div className={styles.footer__credits}>
                <div>©Candleaf All Rights Reserved.</div>
                <div>Designed with ❤️ by <b>uxbly</b></div>
            </div>
        </>
    )
}
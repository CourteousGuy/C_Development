import './footer.css';

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
    <div key={footerInfo.indexOf(section)} className="footer__column">
        <p className="footer__column__header">{section.section}</p>
        {section.links.map(link => <p key={section.links.indexOf(link)} className="footer__column__item">{link}</p>)}
    </div>
)

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer__separator"></div>
                <div className="footer__content">
                    <div className="footer__left">
                        <h1>(img) Candleaf</h1>
                        <p>Your natural candle made for your home and for your wellness.</p>
                    </div>
                    <div className="footer__right">
                        {footerTable}
                    </div>
                </div>
            </div>
            <div className="credits">
                <div><p>©Candleaf All Rights Reserved.</p></div>
                <div><p>Designed with ❤️ by <b>uxbly</b></p></div>
            </div>
        </>
    );
}
import Whatsapp from '../../icons/Whatsapp'
import Tiktok from '../../icons/Tiktok'
import Instagram from '../../icons/Instagram'
import logo from '../../assets/darklogo.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer" id='contact'>
            <img src={logo} alt="Mirado" className="footer-logo" />

            <ul className="footer-contacts">
                <li>
                    <a href="https://wa.me/213542704781" target="_blank" rel="noreferrer">
                        <Whatsapp />
                        <span>0542704781</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@boutique.mirado" target="_blank" rel="noreferrer">
                        <Tiktok />
                        <span>@boutique.mirado</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/bou_tiquemirado" target="_blank" rel="noreferrer">
                        <Instagram />
                        <span>@bou_tiquemirado</span>
                    </a>
                </li>
            </ul>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Boutique Mirado. Tous droits réservés.</p>
            </div>
        </footer>
    )
}
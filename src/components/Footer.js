import '../components/Footer.css';
import Logo from '../assets/logo-white.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faLocationDot,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

const contacts = [
    { icon: faLocationDot, info: '678 Pisa Ave, Chicago, IL 60611', },
    { icon: faPhone, info: '(312) 593-2744', },
    { icon: faEnvelope, info: 'customer@littlelemon.com', },
];

const socials = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', },
    { icon: faYoutube, name: 'youtube', },
];

function Footer() {
    return (
        <footer className='footer'>
            <div className='container grid'>
                <div>
                    <img src={Logo} alt="company logo" className='logo' />
                </div>
                <nav>
                    <h4>Site map</h4>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/order'>Order Online</Link></li>
                        <li><Link to='/reservations'>Reservations</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
                <div className='site-footer-contact'>
                    <h4>Contact Us</h4>
                    <address>
                        {contacts.map((contact, index) =>
                            <p key={index}>
                                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                            </p>
                        )}
                    </address>
                </div>
                <div className="site-footer-social">
                    <h4>Connect with Us</h4>
                    {socials.map((social, index) =>
                        <a
                            key={index}
                            href={`https://www.${social.name}.com`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={social.icon} size="lg" />
                        </a>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer
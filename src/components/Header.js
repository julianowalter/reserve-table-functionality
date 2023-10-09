import Logo from '../assets/Logo.svg'
import './Header.css'
import { useRef } from 'react'
import {Link} from "react-router-dom"

function Header() {
    const hamburgerRef = useRef(null);
    const navMenuRef = useRef(null);

    const toggleMenu = () => {
    hamburgerRef.current.classList.toggle('active');
    navMenuRef.current.classList.toggle('active');
  };

    return (
        <header>
            <nav className='navbar'>
                <img src={Logo} alt='company logo' className='logo'/>
                <ul className='nav-menu' ref={navMenuRef}>
                    <li className='nav-item'><a href='/' className='nav-link'><Link to="/">Home</Link></a></li>
                    <li className='nav-item'><a href='/menu' className='nav-link'><Link to="/menu">Menu</Link></a></li>
                    <li className='nav-item'><a href='/orderonline' className='nav-link'><Link to="/orderonline">Order Online</Link></a></li>
                    <li className='nav-item'><a href='/reservations' className='nav-link'><Link to="/reservations">Reservations</Link></a></li>
                    <li className='nav-item'><a href='/about' className='nav-link'><Link to="/about">About</Link></a></li>
                    <li className='nav-item'><a href='/login' className='nav-link'><Link to="/login">Login</Link></a></li>
                </ul>
                <div className='hamburger' ref={hamburgerRef} onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </nav>
        </header>
    )
}

export default Header
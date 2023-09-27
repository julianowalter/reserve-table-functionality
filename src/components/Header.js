import Logo from '../assets/Logo.svg'
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt='company logo'/>
        </header>
    )
}

export default Header
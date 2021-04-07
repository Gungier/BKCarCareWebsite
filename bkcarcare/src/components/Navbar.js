import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenue = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1400) {
            setButton(false);
        } else {
            setButton(true);
        }
        };
    
        useEffect(() => {
            showButton()
        }, []);
    
        window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenue}>
                     B & K Car Care
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenue}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenue}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutUs' className='nav-links' onClick={closeMobileMenue}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/photoGalary' className='nav-links' onClick={closeMobileMenue}>
                            Photo Galary
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contactUs' className='nav-links-mobile' onClick={closeMobileMenue}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
            </div>
        </nav>  

        </>
    )
}

export default Navbar;
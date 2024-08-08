import './css/hamburger.css';
import './css/header.css';
import './css/logo.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
    const [bg, setBg] = useState('rgb(0, 0, 0, 0)');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                setBg('rgb(0, 0, 0, 0)');
            } else {
                setBg('rgb(0, 0, 0, 0.9)');
            }
        });
    }, []);

    return (
        <header className="header" style={{ backgroundColor: bg }}>
            <div className="container">
                <Link to="home" className="logo header__logo link" smooth={true} duration={800}>
                    <h1 className="logo__text">PrimeAdvertising</h1>
                </Link>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__element1">
                            <Link to="whatwedo" className="link" smooth={true} duration={800}>What we do</Link>
                        </li>
                        <li className="header__element1">
                            <Link to="hww" className="link" smooth={true} duration={800}>How we work</Link>
                        </li>
                        <li className="header__element2">
                            <Link to="whyus" className="link" smooth={true} duration={800}>Why us</Link>
                        </li>
                        <li className="header__element4">
                            <Link to="reviews" className="link" smooth={true} duration={800}>Reviews</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="contact" className="header__button link" smooth={true} duration={800}>
                    Contact us
                </Link>
                <div className="hamburger">
                    <input className="hamburger__checkbox" type="checkbox" id=""/>
                    <div className="hamburger__lines">
                        <span className="hamburger__line hamburger__line1"></span>
                        <span className="hamburger__line hamburger__line2"></span>
                        <span className="hamburger__line hamburger__line3"></span>
                    </div>
                </div>
                <div className="header__menu">
                    <ul className="header__list">
                        <li className="header__element1">
                            <Link to="whatwedo" className="link" smooth={true} duration={800}>What we do</Link>
                        </li>
                        <li className="header__element1">
                            <Link to="hww" className="link" smooth={true} duration={800}>How we work</Link>
                        </li>
                        <li className="header__element2">
                            <Link to="whyus" className="link" smooth={true} duration={800}>Why us</Link>
                        </li>
                        <li className="header__element4">
                            <Link to="reviews" className="link" smooth={true} duration={800}>Reviews</Link>
                        </li>
                        <li className="header__button2">
                            <Link to="contact" className="link" smooth={true} duration={800}>Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

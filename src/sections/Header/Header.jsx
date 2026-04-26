import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-scroll';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { to: 'whatwedo', label: 'What we do' },
  { to: 'hww', label: 'How we work' },
  { to: 'whyus', label: 'Why us' },
  { to: 'reviews', label: 'Reviews' },
];

/**
 * Fixed navigation header with transparent-to-dark scroll transition
 * and a responsive hamburger menu for smaller viewports.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const bgStyle = {
    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
  };

  return (
    <header className={styles.header} style={bgStyle}>
      <div className="container">
        <Link to="home" className={`${styles.logo} link`} smooth={true} duration={800}>
          <h1 className={styles.logoText}>PrimeAdvertising</h1>
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {NAV_ITEMS.map(({ to, label }) => (
              <li key={to} className={styles.listItem}>
                <Link to={to} className="link" smooth={true} duration={800}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="contact" className={`${styles.ctaButton} link`} smooth={true} duration={800}>
          Contact us
        </Link>

        <div className={styles.hamburger}>
          <input
            className={styles.hamburgerCheckbox}
            type="checkbox"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          />
          <div className={styles.hamburgerLines}>
            <span className={`${styles.hamburgerLine} ${styles.line1}`}></span>
            <span className={`${styles.hamburgerLine} ${styles.line2}`}></span>
            <span className={`${styles.hamburgerLine} ${styles.line3}`}></span>
          </div>
        </div>

        <div className={styles.mobileMenu}>
          <ul className={styles.mobileList}>
            {NAV_ITEMS.map(({ to, label }) => (
              <li key={to} className={styles.listItem}>
                <Link to={to} className="link" smooth={true} duration={800}>{label}</Link>
              </li>
            ))}
            <li className={styles.mobileCta}>
              <Link to="contact" className="link" smooth={true} duration={800}>Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

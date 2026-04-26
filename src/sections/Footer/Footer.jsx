import styles from './Footer.module.css';

/**
 * Site footer with copyright and legal links.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={styles.divider}></div>
      <footer className={styles.footer}>
        <div className={styles.bottom}>
          <p>PrimeAdvertising &copy;{currentYear}. All rights reserved.</p>
          <a href="#" className={styles.legalLink}>Privacy</a>
          <a href="#" className={styles.legalLink}>Terms</a>
        </div>
      </footer>
    </>
  );
}

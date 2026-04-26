import { Link } from 'react-scroll';
import Button from '../../components/Button/Button';
import styles from './Hero.module.css';

/**
 * Full-width hero section with tagline, headline, and CTA.
 * Background uses a wave image with a blue radial glow overlay.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blur}></div>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.tagline}>
            HELPING AGENCIES STAND OUT IN THE RED OCEAN MARKET WE ARE IN WITH A.I
          </p>
          <h1 className={styles.headline} data-aos="fade-up">
            JOIN THE 3,000+ AGENCIES AND
            <br />
            CONSULTANTS SELLING THEIR SERVICES
            <br />
            AS &quot;AI GROWTH INFRASTRUCTURES&quot;
          </h1>
          <Button>
            <Link to="contact" smooth={true} duration={800}>Get started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

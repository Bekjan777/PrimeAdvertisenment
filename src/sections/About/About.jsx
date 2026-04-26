import clientImage from '../../assets/clientimage.png';
import styles from './About.module.css';

/**
 * "What we do" section with analytics image and descriptive text.
 */
export default function About() {
  return (
    <section className={styles.about} id="whatwedo">
      <div className="container">
        <img
          src={clientImage}
          alt="Analytics dashboard preview"
          className={styles.image}
          data-aos="fade-right"
        />
        <div className={styles.content}>
          <h2 className={styles.heading} data-aos="fade-up">What we do?</h2>
          <p className={styles.subtitle} data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing accusantium aliquid
          </p>
          <div className={styles.description}>
            <p data-aos="fade-up" data-aos-delay="30">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos
              dolore ea id maxime mollitia nemo optio voluptates. Accusamus
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid
              beatae consequuntur deleniti dolorem doloremque qui soluta suscipit unde voluptatem
              voluptatibus. Aspernatur, nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

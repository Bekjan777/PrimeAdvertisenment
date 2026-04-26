import revenueImage from '../../assets/revenueimg.png';
import styles from './WhyUs.module.css';

/**
 * "Why us" section highlighting competitive advantages.
 */
export default function WhyUs() {
  return (
    <section className={styles.whyUs} id="whyus">
      <div className="container">
        <img
          src={revenueImage}
          alt="Revenue growth chart"
          className={styles.image}
          data-aos="fade-right"
        />
        <div className={styles.content}>
          <h2 className={styles.heading} data-aos="fade-up">Why us?</h2>
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
            <br />
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid beatae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

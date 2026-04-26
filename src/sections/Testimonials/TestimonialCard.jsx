import PropTypes from 'prop-types';
import StarRating from '../../components/StarRating/StarRating';
import styles from './Testimonials.module.css';

/**
 * A single testimonial card with avatar, rating, quote, and author name.
 */
function TestimonialCard({ imageUrl, rating, quote, author }) {
  return (
    <div className={styles.card}>
      <div className="container">
        <div className={styles.avatar} data-aos="fade-up">
          <img src={imageUrl} alt={`${author} portrait`} />
        </div>
        <div className={styles.content}>
          <div className={styles.quoteMark} data-aos="fade-right" />
          <StarRating count={rating} />
          <p data-aos="fade-up" className={styles.quote}>{quote}</p>
          <h3 className={styles.author}>{author}</h3>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default TestimonialCard;

import PropTypes from 'prop-types';
import styles from './StarRating.module.css';

const STAR_PATH =
  'M8.164 0.551C8.473-0.184 9.527-0.184 9.836 0.551L11.662 4.888C11.793 5.198 12.088 5.41 12.426 5.436L17.165 5.812C17.968 5.875 18.294 6.865 17.682 7.383L14.071 10.439C13.813 10.657 13.701 11 13.78 11.326L14.883 15.895C15.07 16.669 14.217 17.281 13.53 16.866L9.472 14.418C9.182 14.243 8.818 14.243 8.528 14.418L4.47 16.866C3.783 17.281 2.93 16.669 3.117 15.895L4.22 11.326C4.3 11 4.187 10.657 3.929 10.439L0.318 7.383C-0.294 6.865 0.032 5.875 0.835 5.812L5.574 5.436C5.913 5.41 6.207 5.198 6.338 4.888L8.164 0.551Z';

/**
 * Renders a row of star icons to represent a rating.
 */
export default function StarRating({ count }) {
  return (
    <div className={styles.stars} data-aos="fade-left">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="30" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={STAR_PATH} fill="white" />
        </svg>
      ))}
    </div>
  );
}

StarRating.propTypes = {
  count: PropTypes.number.isRequired,
};

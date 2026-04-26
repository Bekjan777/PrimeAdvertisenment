import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * Primary call-to-action button with inner glow effect.
 * Renders as a span to avoid nesting issues with react-scroll Link components.
 */
export default function Button({ children }) {
  return (
    <span className={styles.button} data-aos="fade-up">
      {children}
    </span>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

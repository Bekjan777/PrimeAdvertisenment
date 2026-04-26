import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

/**
 * Single statistic display with a large percentage number and label.
 */
function StatItem({ value, label }) {
  return (
    <div className={styles.item} data-aos="fade-up" data-aos-delay="250">
      <h3 className={styles.value}>
        <span className={styles.number}>{value}</span>
        <span className={styles.percent}>%</span>
      </h3>
      <p className={styles.label}>{label}</p>
    </div>
  );
}

StatItem.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

const STATS = [
  { value: 391, label: 'Partners average increase in sales calls' },
  { value: 200, label: 'Less churn for our partners with AI infrastructures' },
  { value: 123, label: 'Growth in client retention through automation' },
];

/**
 * Statistics bar showing key performance metrics.
 */
export default function Statistics() {
  return (
    <section className="container">
      <div className={styles.grid}>
        {STATS.map(({ value, label }) => (
          <StatItem key={value} value={value} label={label} />
        ))}
      </div>
    </section>
  );
}

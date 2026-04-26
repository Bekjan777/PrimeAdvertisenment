import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-scroll';
import styles from './Workflow.module.css';

/**
 * Calculates element's absolute position on the page.
 * @param {HTMLElement} element - DOM element to measure.
 * @returns {{ top: number, bottom: number }} Absolute Y coordinates.
 */
function getElementPosition(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.pageYOffset,
    bottom: rect.bottom + window.pageYOffset,
  };
}

/**
 * Computes the scroll-based fill percentage for a progress bar element.
 * Returns a value clamped between 0 and 100.
 *
 * @param {HTMLElement} element - The progress bar container.
 * @returns {number} Fill percentage (0–100).
 */
function computeProgress(element) {
  const { top } = getElementPosition(element);
  const viewportCenter = window.scrollY + window.innerHeight / 2 + 100;
  const ratio = ((viewportCenter - top) / element.offsetHeight) * 100;
  return Math.min(100, Math.max(0, ratio));
}

const STEPS = [
  {
    number: '01',
    title: 'CONTACT US',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante placerat.',
      'Integer a facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante placerat.',
    ],
    showCta: true,
  },
  {
    number: '02',
    title: 'WE WORK',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a facilisis dui.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante placerat.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
    showCta: false,
  },
  {
    number: '03',
    title: 'WORK DONE',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer a facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante placerat.',
      'Integer a facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante placerat.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
    showCta: false,
  },
];

/**
 * Three-step workflow section with scroll-driven progress bars.
 * The progress bars fill as the user scrolls past each step.
 */
export default function Workflow() {
  const [progress, setProgress] = useState([0, 0, 0]);
  const barRefs = [useRef(null), useRef(null), useRef(null)];

  const handleScroll = useCallback(() => {
    const newProgress = barRefs.map((ref) => {
      if (!ref.current) return 0;
      return computeProgress(ref.current);
    });
    setProgress(newProgress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const stepLayouts = ['row', 'rowReverse', 'row'];

  return (
    <section className={styles.workflow} id="hww">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How we work</h2>
          <p className={styles.sectionSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {STEPS.map((step, index) => (
          <div
            key={step.number}
            className={`${styles.step} ${styles[stepLayouts[index]]}`}
          >
            <h3
              className={styles.stepTitleDesktop}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {step.title}
            </h3>

            <div className={styles.progressColumn}>
              <span className={styles.stepNumber}>{step.number}</span>
              <div
                className={`${styles.progressBar} ${index > 0 ? styles.progressBarShort : ''}`}
                ref={barRefs[index]}
              >
                <div
                  className={styles.progressFill}
                  style={{ height: `${progress[index]}%` }}
                />
              </div>
            </div>

            <div className={styles.stepContent}>
              <h3
                className={styles.stepTitleMobile}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {step.title}
              </h3>
              {step.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={styles.stepDescription}
                  data-aos="fade-up"
                  data-aos-delay={String(200 + i * 100)}
                >
                  {text}
                </p>
              ))}
              {step.showCta && (
                <div className={styles.stepButton} data-aos="fade-up" data-aos-delay="300">
                  <Link to="contact" smooth={true} duration={800}>Contact Us</Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

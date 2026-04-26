import { useSwiper } from 'swiper/react';
import styles from './SwiperNavigation.module.css';

/**
 * Custom previous/next navigation arrows for Swiper.
 * Must be rendered as a child of a <Swiper> component.
 */
export default function SwiperNavigation() {
  const swiper = useSwiper();

  return (
    <div className={styles.navButtons}>
      <svg
        width="50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        onClick={() => swiper.slidePrev()}
        role="button"
        aria-label="Previous slide"
      >
        <g data-name="Arrow Left">
          <path
            d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z"
            fill="#fff"
          />
          <path
            d="m8.41 15 5.29-5.29-1.41-1.42-7 7a1 1 0 0 0 0 1.41l7 7 1.41-1.41L8.41 17H27v-2z"
            fill="#fff"
          />
        </g>
      </svg>
      <svg
        width="50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        onClick={() => swiper.slideNext()}
        role="button"
        aria-label="Next slide"
      >
        <g data-name="Arrow Right">
          <path
            d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z"
            fill="#fff"
          />
          <path
            d="m26.71 15.29-7-7-1.42 1.42 5.3 5.29H5v2h18.59l-5.29 5.29 1.41 1.41 7-7a1 1 0 0 0 0-1.41z"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
}

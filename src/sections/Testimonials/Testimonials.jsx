import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperNavigation from '../../components/SwiperNavigation/SwiperNavigation';
import TestimonialCard from './TestimonialCard';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    imageUrl:
      'https://assets-global.website-files.com/662cfa87c5ae0d51e509acbd/662cfa88c5ae0d51e509ad4a_Testimonial%2520member1-p-500.png',
    rating: 5,
    quote:
      '\u201CStart AI came at the right time when started to scale our agency. This tool is saving us a lot of time and we are more efficient than ever. No more back and forth and now we can scale our operations easier than ever.\u201D',
    author: 'Hanna Michigan',
  },
  {
    id: 2,
    imageUrl:
      'https://assets-global.website-files.com/662cfa87c5ae0d51e509acbd/662cfa88c5ae0d51e509ad4b_Testimonial%2520member2-p-500.png',
    rating: 5,
    quote:
      '\u201CStart AI came at the right time when started to scale our agency. This tool is saving us a lot of time and we are more efficient than ever. No more back and forth and now we can scale our operations easier than ever.\u201D',
    author: 'Miki Vazovski',
  },
  {
    id: 3,
    imageUrl:
      'https://assets-global.website-files.com/662cfa87c5ae0d51e509acbd/662cfa88c5ae0d51e509ad48_Testimonial%2520member4-p-500.png',
    rating: 5,
    quote:
      '\u201CStart AI came at the right time when started to scale our agency. This tool is saving us a lot of time and we are more efficient than ever. No more back and forth and now we can scale our operations easier than ever.\u201D',
    author: 'Iosiff Stalin',
  },
];

/**
 * Client testimonials section with a Swiper carousel.
 */
export default function Testimonials() {
  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <h2 className={styles.heading}>Learn more from our happy clients</h2>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className={styles.slider}
            loop={true}
          >
            {TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard
                  imageUrl={item.imageUrl}
                  rating={item.rating}
                  quote={item.quote}
                  author={item.author}
                />
              </SwiperSlide>
            ))}
            <SwiperNavigation />
          </Swiper>
        </div>
      </div>
    </section>
  );
}

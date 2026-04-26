import { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import { sendBookingNotification } from '../../services/telegram';
import Calendar from '../../components/Calendar/Calendar';
import styles from './Contact.module.css';

/**
 * Contact form with date/time picker that sends booking
 * notifications to the team via Telegram bot API.
 */
export default function Contact() {
  const { selectedDate } = useContext(BookingContext);

  const isDateSelected =
    selectedDate.day !== 0 || selectedDate.month !== 0 || selectedDate.year !== 0;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isDateSelected) return;

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const time = formData.get('time');

    const success = await sendBookingNotification({
      name,
      email,
      phone,
      time,
      date: selectedDate,
    });

    if (success) {
      event.target.reset();
      window.location.reload();
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Contact us</h2>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                className={styles.inputField}
                required
                id="contact-name"
              />
              <label htmlFor="contact-name" className={styles.inputLabel}>Full name</label>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                className={styles.inputField}
                required
                id="contact-email"
              />
              <label htmlFor="contact-email" className={styles.inputLabel}>Email</label>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="phone"
                className={styles.inputField}
                required
                id="contact-phone"
              />
              <label htmlFor="contact-phone" className={styles.inputLabel}>Phone</label>
            </div>

            <div className={styles.timeGroup}>
              <input
                type="time"
                name="time"
                className={styles.timeField}
                required
                id="contact-time"
              />
              <label htmlFor="contact-time" className={styles.timeLabel}>Time</label>
            </div>
          </div>

          <div className={styles.right}>
            <Calendar />
            <button className={styles.submit} type="submit">Get Started</button>
          </div>
        </form>
      </div>
    </section>
  );
}

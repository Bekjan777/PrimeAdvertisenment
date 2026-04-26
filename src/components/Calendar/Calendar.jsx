import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { BookingContext } from '../../context/BookingContext';
import chevronLeft from '../../assets/chevronleft.svg';
import chevronRight from '../../assets/chevronright.svg';
import styles from './Calendar.module.css';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * Date picker calendar for booking appointments.
 * Only future dates (including today) are selectable.
 */
export default function Calendar() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [days, setDays] = useState([]);
  const { selectedDate, setSelectedDate } = useContext(BookingContext);

  useEffect(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    const lastDateOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    const cells = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      cells.push({ day: lastDateOfPrevMonth - i + 1, inactive: true });
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday =
        i === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      cells.push({ day: i, isToday });
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      cells.push({ day: i - lastDayOfMonth + 1, inactive: true });
    }

    setDays(cells);
  }, [currentYear, currentMonth]);

  const navigateMonth = (direction) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const isDateSelectable = (day) => {
    if (day.inactive) return false;
    if (currentYear > today.getFullYear()) return true;
    if (currentYear === today.getFullYear() && currentMonth > today.getMonth()) return true;
    if (
      currentYear === today.getFullYear() &&
      currentMonth === today.getMonth() &&
      day.day >= today.getDate()
    ) {
      return true;
    }
    return false;
  };

  const isSelected = (day) => {
    return (
      !day.inactive &&
      selectedDate.day === day.day &&
      selectedDate.month === currentMonth &&
      selectedDate.year === currentYear
    );
  };

  const handleDayClick = (day) => {
    if (isDateSelectable(day)) {
      setSelectedDate({
        day: day.day,
        month: currentMonth,
        year: currentYear,
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.calendarHeader}>
        <p className={styles.currentDate}>{`${MONTH_NAMES[currentMonth]} ${currentYear}`}</p>
        <div className={styles.icons}>
          <span onClick={() => navigateMonth(-1)} role="button" aria-label="Previous month">
            <img src={chevronLeft} alt="" />
          </span>
          <span onClick={() => navigateMonth(1)} role="button" aria-label="Next month">
            <img src={chevronRight} alt="" />
          </span>
        </div>
      </header>

      <div className={styles.calendar}>
        <ul className={styles.weeks}>
          {WEEKDAYS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <ul className={styles.days}>
          {days.map((day, index) => {
            const classNames = [
              day.inactive ? styles.inactive : '',
              day.isToday ? styles.today : '',
              isSelected(day) ? styles.selected : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <li key={index} className={classNames} onClick={() => handleDayClick(day)}>
                {day.day}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

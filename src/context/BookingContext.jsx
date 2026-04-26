import { createContext } from 'react';

/**
 * Context for sharing the selected booking date across the form and calendar.
 * The date object has { day, month, year } shape where month is 0-based.
 */
export const BookingContext = createContext({
  selectedDate: { day: 0, month: 0, year: 0 },
  setSelectedDate: () => {},
});

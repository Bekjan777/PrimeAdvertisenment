import {useState, useEffect, createContext, useContext} from 'react';
import styles from '../css/calendar.module.css';
import chevleft from "../assets/chevronleft.svg"
import chevright from "../assets/chevronright.svg"

export const CalendarContext = createContext({
    opdate: {
        day: 0,
        month: 0,
        year: 0,
    },
    setOpdate: () => {}
})

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [currYear, setCurrYear] = useState(date.getFullYear());
    const [currMonth, setCurrMonth] = useState(date.getMonth());
    const [days, setDays] = useState([]);
    const {
        opdate,
        setOpdate
    } = useContext(CalendarContext);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    useEffect(() => {
        renderCalendar();
    }, [currYear, currMonth]);

    const renderCalendar = () => {
        const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
        const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
        const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
        const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

        const newDays = [];

        for (let i = firstDayofMonth; i > 0; i--) {
            newDays.push({ day: lastDateofLastMonth - i + 1, inactive: true });
        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            const isToday = i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear();
            newDays.push({ day: i, active: isToday });
        }

        for (let i = lastDayofMonth; i < 6; i++) {
            newDays.push({ day: i - lastDayofMonth + 1, inactive: true });
        }

        setDays(newDays);
    };

    const handlePrevNext = (direction) => {
        let newMonth = currMonth + direction;
        let newYear = currYear;

        if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        } else if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        }

        setCurrMonth(newMonth);
        setCurrYear(newYear);
        setDate(new Date());
    };
    return (
        <div className={styles.wrapper}>
            <header className={styles.headercal}>
                <p className={styles.currentDate}>{`${months[currMonth]} ${currYear}`}</p>
                <div className={styles.icons}>
                    <span id="prev" className="material-symbols-rounded" onClick={() => handlePrevNext(-1)}><img src={chevleft}
                                                                                                                 alt="chevron_left"/></span>
                    <span id="next" className="material-symbols-rounded" onClick={() => handlePrevNext(1)}><img
                        src={chevright}
                        alt="chevron_right"/></span>
                </div>
            </header>
            <div className={styles.calendar}>
                <ul className={styles.weeks}>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((weekDay, index) => (
                        <li key={index}>{weekDay}</li>
                    ))}
                </ul>
                <ul className={styles.days}>
                    {days.map((day, index) => (
                        <li
                            key={index}
                            className={`${day.inactive ? styles.inactive : ''} ${day.active ? styles.active : ''} ${(opdate.day == day.day && opdate.month == currMonth && opdate.year == currYear && !day.inactive) ? styles.active2 : ''}`}
                            onClick={() => {
                                if (!day.inactive && (currYear > date.getFullYear() || ((currYear == date.getFullYear() && currMonth > date.getMonth()) || (currYear == date.getFullYear() && currMonth == date.getMonth() && day.day >= date.getDate())))) {
                                    setOpdate({
                                        day: day.day,
                                        month: currMonth,
                                        year: currYear,
                                    })
                                }
                            }}
                        >
                            {day.day}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Calendar;

import './sass/form.sass'
import Calendar from "./components/calendar.jsx";
import Bot from "../bot.json"
import {CalendarContext} from "./components/calendar.jsx";
import {useContext} from "react";

const token = Bot.token
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`
const chatId = Bot.chatId

export default function Form() {
    const opdate = useContext(CalendarContext);
    const date = opdate.opdate
    return (
        <div className="form" id="contact">
            <div className="container">
                <form action="#" onSubmit={async (e) => {
                    if (date == {
                        day: 0,
                        month: 0,
                        year: 0,
                    }) return;
                    e.preventDefault();
                    const [name, email, phone, time] = [e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value]
                    const text = `Name: ${name}\nemail: ${email}\nPhone: ${phone}\ndate: ${date.day < 10 ? '0' + date.day : date.day}.${date.month < 10 ? '0' + date.month : date.month}.${date.year}\ntime=${time}\nwhen and where: ${new Date()}`
                        await fetch(URL_API, {
                            method:'POST',
                            headers: {"Content-type": "application/json"},
                            body: JSON.stringify({chat_id: chatId, text})
                        })
                    location.reload()
                }}>
                    <div className="form__left">
                        <div className="form__head">
                            Contact us
                        </div>
                        <div className="input">
                            <input type="text" className="input-field" required/>
                            <label className="input-label">Full name</label>
                        </div>
                        <div className="input">
                            <input type="email" className="input-field" required/>
                            <label className="input-label">Email</label>
                        </div>
                        <div className="input">
                            <input type="text" className="input-field" required/>
                            <label className="input-label">Phone</label>
                        </div>
                        <div className="input-time">
                            <input type="time" className="input-field-time" required/>
                            <label className="input-label-time">Time</label>
                        </div>
            </div>
            <div className="form__right">
                <Calendar></Calendar>
                <button className="submit" type="submit">Get Started</button>
                </div>
                </form>
            </div>
        </div>
    )
}
import './css/App.css'
import Header from './header.jsx'
import Main from './nmain.jsx'
import Numbers from "./nums.jsx";
import About from "./about.jsx";
import Howwework from "./howwework.jsx";
import Whyus from "./whyus.jsx";
import Footer from "./footer.jsx";
import Rate from "./rate.jsx";
import Form from "./form.jsx"
import {CalendarContext} from "./components/calendar.jsx";
import {useState} from "react";


function App() {
    const [opdate, setOpdate] = useState({
        day: 0,
        month: 0,
        year: 0,
    });
    return (
        <CalendarContext.Provider value={{
            opdate,
            setOpdate
        }}>
            <Header/>
            <Main/>
            <Numbers/>
            <About/>
            <Howwework></Howwework>
            <Whyus></Whyus>
            <Rate/>
            <Form></Form>
            <Footer></Footer>
        </CalendarContext.Provider>
    );
}

export default App

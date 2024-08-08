import './sass/main.sass'
// import {useEffect} from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Button from "./components/Button/button.jsx";
import {Link} from "react-scroll";

export default function Main() {
    // useEffect(()=>{
    //     AOS.init({
    //         delay: 0,
    //         duration: 1000
    //     })
    // }, [])
    return (
        <main className="main">
            <div className="blur"></div>
            <div className="container">
                <div className="main__content">
                    <p className="main__upper">HELPING AGENCIES STAND OUT IN THE RED OCEAN MARKET WE ARE IN WITH A.I</p>
                    <h1 className="main__text" data-aos="fade-up">
                        JOIN THE 3,000+ AGENCIES AND
                        <br/>
                        CONSULTANTS SELLING THEIR SERVICES
                        <br/>
                        AS "AI GROWTH INFRASTRUCTURES"</h1>
                    <Button><Link to="contact" smooth={true} duration={800}>Get started</Link></Button>
                </div>
            </div>
        </main>
    )
}
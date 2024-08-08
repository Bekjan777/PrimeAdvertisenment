import './sass/num.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

// eslint-disable-next-line react/prop-types
export default function Number({ num, text }) {
    useEffect(()=>{
        AOS.init({
            delay: 0,
            duration: 1000
        })
    }, [])
    return (
        <div className="number" data-aos="fade-up" data-aos-delay="250">
            <h1 className="number__num"><span className="number__text">{num} </span><span className="number__percent">%</span></h1>
            <h3 className="number__description">{text}</h3>
        </div>
    )
}
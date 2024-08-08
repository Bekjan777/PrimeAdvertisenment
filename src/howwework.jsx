import "./sass/howwework.sass"
import {useEffect, useState, useRef} from "react";
import {Link} from "react-scroll";
// import AOS from "aos";

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

export default function Howwework() {
    const [heightn, setHeightn] = useState(0);
    const [heightn2, setHeightn2] = useState(0);
    const [heightn3, setHeightn3] = useState(0);
    const myref = useRef(null);
    const myref2 = useRef(null);
    const myref3 = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            let box1 = getCoords(myref.current)
            let box2 = getCoords(myref2.current)
            let box3 = getCoords(myref3.current)

            let curh = ((window.scrollY + window.innerHeight / 2 + 100) - box1.top);
            let ofh = myref.current.offsetHeight;
            let prop = curh / ofh * 100
            if (prop >= 0 && prop <= 100) setHeightn(prop)
            else if (prop < 0) setHeightn(0)
            else setHeightn(100)

            let curh2 = ((window.scrollY + window.innerHeight / 2 + 100) - box2.top);
            let ofh2 = myref2.current.offsetHeight;
            let prop2 = curh2 / ofh2 * 100
            if (prop2 >= 0 && prop2 <= 100) setHeightn2(prop2)
            else if (prop2 < 0) setHeightn2(0)
            else setHeightn2(100)

            let curh3 = ((window.scrollY + window.innerHeight / 2 + 100) - box3.top);
            let ofh3 = myref3.current.offsetHeight;
            let prop3 = curh3 / ofh3 * 100
            if (prop3 >= 0 && prop3 <= 100) setHeightn3(prop3)
            else if (prop3 < 0) setHeightn3(0)
            else setHeightn3(100)
        })
    }, []);
    return (
        <div className="hww" id="hww">
            <div className="container">
                <div className="hww__slogan">
                    <h1 className="hww__slhead">How we work</h1>
                    <p className="hww__subtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="hww__con1">
                    <h1 className="hww__headsl" data-aos="fade-up" data-aos-delay="100">CONTACT US</h1>
                    <div className="hww__united">
                        <h1 className="hww__num">
                            01
                        </h1>
                        <div className="hww__progress_bar" ref={myref}>
                            <div className="hww__line" style={{height: heightn + "%"}}></div>
                        </div>
                    </div>
                    <div className="hww__block">
                        <h1 className="hww__headsl hww__hide" data-aos="fade-up" data-aos-delay="100">CONTACT US</h1>
                        <p className="hww__desc" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Integer a
                            facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante
                            placerat.
                            <br/> <br/>
                            Integer a
                            facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante
                            placerat.
                        </p>
                        <div className="hww__button" data-aos="fade-up" data-aos-delay="300"><Link to="contact" smooth={true} duration={800}>Contact Us</Link></div>
                    </div>
                </div>
                <div className="hww__con2">
                    <h1 className="hww__headsl" data-aos="fade-up" data-aos-delay="100">WE WORK</h1>
                    <div className="hww__united">
                        <h1 className="hww__num">
                            02
                        </h1>
                        <div className="hww__progress_bar hww__progress_bar-mini" ref={myref2}>
                            <div className="hww__line" style={{height: heightn2 + "%"}}></div>
                        </div>
                    </div>
                    <div className="hww__block">
                        <h1 className="hww__headsl hww__hide" data-aos="fade-up" data-aos-delay="100">WE WORK</h1>
                        <p className="hww__desc" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Integer a
                            facilisis dui.</p>
                        <p className="hww__desc" data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Integer a
                            facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante
                            placerat.</p>
                        <p className="hww__desc" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="hww__con3">
                    <h1 className="hww__headsl" data-aos="fade-up" data-aos-delay="100">WORK DONE</h1>
                    <div className="hww__united">
                        <h1 className="hww__num">
                            03
                        </h1>
                        <div className="hww__progress_bar hww__progress_bar-mini" ref={myref3}>
                            <div className="hww__line" style={{height: heightn3 + "%"}}></div>
                        </div>
                    </div>
                    <div className="hww__block">
                        <h1 className="hww__headsl hww__hide" data-aos="fade-up" data-aos-delay="100">WORK DONE</h1>
                        <p className="hww__desc" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet
                            consectetur adipiscing elit. Integer a
                            facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante
                            placerat.</p>
                        <p className="hww__desc" data-aos="fade-up" data-aos-delay="300"> Integer a
                            facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante
                            placerat.</p>
                        <p className="hww__desc" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
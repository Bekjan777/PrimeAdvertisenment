import './sass/about.sass'
import climg from './assets/clientimage.png'
// import {useEffect} from "react";
// import AOS from "aos";

export default function About() {
    // useEffect(()=>{
    //     AOS.init({
    //         delay: 0,
    //         duration: 1000
    //     })
    // }, [])
    return (
        <div className="about_us" id="whatwedo">
            <div className="container">
                <img
                    src={climg}
                    alt="analitics"
                    className='about_us__pict'
                    data-aos="fade-right"/>
                <div className="about_us__inner">
                    {/*<p className="main__upper">HELPING AGENCIES STAND OUT IN THE RED OCEAN MARKET WE ARE IN WITH A.I</p>*/}
                    <h2 className="about_us__inner__header" data-aos="fade-up">What we do?</h2>
                    <p className="about_us__mini" data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipisicing accusantium aliquid</p>
                    <div className="about_us__inner__description"><p data-aos="fade-up" data-aos-delay="30">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Delectus dignissimos dolore ea id maxime mollitia nemo optio voluptates. Accusamus</p>
                        <br/>
                        <p data-aos="fade-up" data-aos-delay="70">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid beatae consequuntur deleniti dolorem doloremque qui soluta suscipit unde voluptatem voluptatibus. Aspernatur, nam.
                        </p>
                    </div>
                    {/*<Button>More...</Button>*/}
                </div>
            </div>
        </div>
    )
}
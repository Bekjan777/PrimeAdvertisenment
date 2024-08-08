import './sass/whyus.sass'
import climg from './assets/revenueimg.png'
// import {useEffect} from "react";
// import AOS from "aos"

export default function Whyus() {
    // useEffect(()=>{
    //     AOS.init({
    //         delay: 0,
    //         duration: 1000
    //     })
    // }, [])
    return (
        <div className="whyus" id="whyus">
            <div className="container">
                <img
                    src={climg}
                    alt="analitics"
                    className='whyus__pict'
                    data-aos="fade-right"/>
                <div className="whyus__inner">
                    <h2 className="whyus__inner__header" data-aos="fade-up">Why us?</h2>
                    <div className="whyus__inner__description"><p data-aos="fade-up" data-aos-delay="30">Lorem ipsum
                        dolor sit amet, consectetur adipisicing
                        elit. Delectus dignissimos dolore ea id maxime mollitia nemo optio voluptates. Accusamus</p>
                        <br/>
                        <p data-aos="fade-up" data-aos-delay="70">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid beatae
                            consequuntur deleniti dolorem doloremque qui soluta suscipit unde voluptatem voluptatibus.
                            Aspernatur, nam.
                        </p>
                        <br/>
                        <p data-aos="fade-up" data-aos-delay="100">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid beatae.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
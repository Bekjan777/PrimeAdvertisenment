
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Rates from "./components/Rates.jsx";
// import { Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./css/rate_slider.css"
import CustomButtonSwiper from "./components/CustomButtonSwiper.jsx";
// import 'swiper/swiper-bundle.css';

const Rate = () => {

    // useEffect(() => {
    //     new Swiper('.swiper', {
    //         // modules: [Navigation, Pagination],
    //         pagination: {
    //             el: '.rate_swiper__inner__wrapper__pagination',
    //         },
    //         navigation: {
    //             nextEl: 'swiper-button-next',
    //             prevEl: 'swiper-button-prev',
    //         },
    //         scrollbar: {
    //             el: '.rate_swiper__inner__wrapper__scrollbar',
    //         },
    //     });
    // }, []);
    
    return (
        <div className="Rate" id="reviews">
            <div className="container">
                <h1 className="head__slogan">
                    Learn more from our happy clients
                </h1>
                <div >
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                            className="swiper"

                            loop={true}
                    >
                        <SwiperSlide>
                            <Rates
                                amount={5}
                                URL={`https://assets-global.website-files.com/662cfa87c5ae0d51e509acbd/662cfa88c5ae0d51e509ad4a_Testimonial%2520member1-p-500.png`}
                                desc="“Start AI came at the right time when started to scale our agency. This tool is saving us a lot of time and we are more efficient than ever. No more back and forth and now we can scale our operations easier than ever.”"
                                name={"Hanna Michigan"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Rates
                                amount={5}
                                URL={`https://assets-global.website-files.com/662cfa87c5ae0d51e509acbd/662cfa88c5ae0d51e509ad4b_Testimonial%2520member2-p-500.png`}
                            desc="“Start AI came at the right time when started to scale our agency. This tool is saving us a lot of time and we are more efficient than ever. No more back and forth and now we can scale our operations easier than ever.”"
                            name={"Miki Vazovski"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Rates
                                amount={5}
                                URL={`https://assets-global.website-files.com/662cfa87c5ae0d51e509acbd/662cfa88c5ae0d51e509ad48_Testimonial%2520member4-p-500.png`}
                                name={"Iosiff Stalin"}
                                desc={"“Start AI came at the right time when started to scale our agency. This tool is saving us a lot of time and we are more efficient than ever. No more back and forth and now we can scale our operations easier than ever.”"}/>
                        </SwiperSlide>
                        <CustomButtonSwiper/>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Rate;
import Stars from "./stars.jsx";
import '../css/rates.css'
import Button from "./Button/button.jsx";
// eslint-disable-next-line react/prop-types
function Rates({URL, amount, desc, name}) {
    return (
        <div className={"rate"}>
            <div className="container">
                <div className="rate__img" data-aos="fade-up">
                    <img
                        src={URL}
                        alt="girl"/>
                </div>
                <div className="rate__inner" >
                    <div className="rate__inner__quotation__mark" data-aos="fade-right"></div>
                    <Stars amount={amount} ></Stars>
                    <p data-aos="fade-up" className="rate__desc">
                        {desc}
                    </p>
                    <h1 className={"rate__head"}>{name}</h1>
                </div>
            </div>
        </div>
    );
}


export default Rates;
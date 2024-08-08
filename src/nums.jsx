import Number from "./num.jsx";
import './sass/nums.sass'
export default function Numbers() {
    return (
        <div className="container">
            <div className="numbers">
                <Number num={391} text={"Partners average Increase sales calls "}></Number>
                <Number num={200} text={"less churn for our partners with AI infrastructures"}></Number>
                <Number num={123} text={"less churn for our partners with AI infrastructures"}></Number>
            </div>
        </div>
    )
}
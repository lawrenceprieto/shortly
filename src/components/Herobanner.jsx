import "../styles/herobanner.css"
import illustration from "../assets/images/illustration-working.svg"

function Herobanner() {
    return (
        <>
            <div className="herobanner">
                <img className="hero-img" src={illustration} alt="hero-image" />
                <div className="hero-details">
                    <h1 className="heading">More than just shorter links</h1>
                    <p className="sub-heading">Build your brand's recognition and get detailed insights on how your links are performing</p>
                    <button className="hero-btn">Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Herobanner
import "../styles/feature.css"
import brandRecognition from "../assets/images/icon-brand-recognition.svg"
import detailedRecords from "../assets/images/icon-detailed-records.svg"
import fullyCustomizable from "../assets/images/icon-fully-customizable.svg"

function Feature() {
    return (
        <>
            <div className="feature">
                <div className="feature-header">
                    <h2 className="heading">Advanced Statistics</h2>
                    <p className="sub-heading">Track how your links are performing across the wev with our advanced statistics dashboard.</p>
                </div>
                <div className="feature-list">
                    <div className="feature-container">
                        <img className="" src={brandRecognition} alt="brand-reconition-img" />
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div className="feature-container">
                        <img className="" src={detailedRecords} alt="detailed-records-img" />
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className="feature-container">
                        <img className="" src={fullyCustomizable} alt="fully-customizable" />
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature
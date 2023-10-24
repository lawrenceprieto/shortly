import Feature from "../components/Feature"
import Footer from "../components/Footer"
import FooterBanner from "../components/FooterBanner"
import Herobanner from "../components/Herobanner"
import InputField from "../components/InputField"
import Navbar from "../components/Navbar"

function LandingPage() {
    return (
        <>
            <Navbar />
            <Herobanner />
            <InputField />
            <Feature />
            <FooterBanner />
            <Footer />
        </>
    )
}

export default LandingPage
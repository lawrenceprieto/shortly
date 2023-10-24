import "../styles/navbar.css"
import logo from "../assets/images/logo.svg"
import hamburger from "../assets/images/icon-hamburger.svg"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <img className="logo" src={logo} alt="logo" />
                <img className="hamburger" src={hamburger} alt="hamburger-button" />
            </div>
        </>
    )
}

export default Navbar
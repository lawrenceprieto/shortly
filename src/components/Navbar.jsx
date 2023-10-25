import "../styles/navbar.css"
import logo from "../assets/images/logo.svg"
import hamburger from "../assets/images/icon-hamburger.svg"
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function Navbar() {

    const [show, setShow] = useState(false);
    function handleCloseMenu() { setShow(false); }
    function handleOpenMenu() { setShow(true); }

    return (
        <>
            <div className="navbar">
                <img className="logo" src={logo} alt="logo" />
                <img  className="hamburger" src={hamburger} 
                    alt="hamburger-button"  
                    onClick={handleOpenMenu}
                />
                <Modal show={show} onHide={handleCloseMenu}>
                    <Modal.Body>
                        <div className="nav-link">
                            <ul>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </div>
                        <div className="buttons">
                            <button className="login">Login</button>
                            <button className="signup">Sign up</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default Navbar
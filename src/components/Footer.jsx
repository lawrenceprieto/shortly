import "../styles/footer.css"
import logo from "../assets/images/logo.svg"

function Footer() {
    return (
        <>
            <div className="footer">
                <img className="footer-logo" src={logo} alt="footer-logo" />
                <div className="footer-links">
                    <div className="features">
                        <h3>Features</h3>
                        <ul>
                            <li><a href="">Link Shortening</a></li>
                            <li><a href="">Branded Links</a></li>
                            <li><a href="">Analytics</a></li>
                        </ul>
                    </div>
                    <div className="resources">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Developers</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </div>
                    <div className="features">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-socmeds">
                    <ul>
                        <li><i className="fa-brands fa-square-facebook"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-pinterest"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>     
            </div>
        </>
    )
}

export default Footer
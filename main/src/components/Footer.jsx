import { Facebook, Google, Headset, Send, Whatsapp } from "react-bootstrap-icons";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="newsletter">
                <div>
                    <h2 className="blue2">

                        <strong>Subscrible newsletter</strong>
                    </h2>
                </div>
                <div className="newsletter-email">
                    <h6>Email address</h6>
                    <Send />
                </div>
                <div className="call-us">
                    <div>
                        <Headset className="icon-50px" />
                    </div>
                    <div className="d-flex flex-column">
                        <p className="m-0" >Call us 24/7:</p>
                        <p className="m-0">(+62) 0123 567 789</p>
                    </div>
                </div>
            </div>
            <div className="footer-links blue2">
                <div className="col">
                    <img src="footerlogo.png" alt="" className="footer-logo" />
                    <p>64 st james boulevard
                        <br />
                        hoswick , ze2 7zj</p>
                    <hr />
                    <div className="icon-25px d-flex justify-content-evenly">
                        <Google />
                        <Facebook />
                        <Whatsapp />
                    </div>
                </div>
                <div className="col mx-4">
                    <h4>Find product</h4>
                    <ul>
                        <li>Bronze arnold</li>
                        <li>Chronograph blue</li>
                        <li>Smart phones</li>
                        <li>Automatic watch</li>
                        <li>Hair straighteners</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Get help</h4>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Return policy</li>
                        <li>Privacy policy</li>
                        <li>Payment policy</li>
                    </ul>
                </div>
                <div className="col">
                    <h4 className="mx-2">About us</h4>
                    <ul>
                        <li>News</li>
                        <li>Service</li>
                        <li>Our policy</li>
                        <li>Customer care</li>
                        <li>Faq's</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
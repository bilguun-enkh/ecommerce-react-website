import {GeoAlt, Truck} from "react-bootstrap-icons"

function NavBar() {
    return (
        <div className="my-nav-bar">
            <div>Need help? Call us: (+98) 0234 456 789</div>
            <div>
                <div className="nav-bar-2nd-div">
                    <span className="our-store"><GeoAlt />Our store</span>
                    <span className="track-order"><Truck />Track your order</span>
                </div>
            </div>
        </div>
    )
}
export default NavBar
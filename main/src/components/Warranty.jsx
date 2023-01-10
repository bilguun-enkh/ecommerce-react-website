import { BoxSeamFill, Exclude, KeyFill } from "react-bootstrap-icons";

export default function Warranty() {
    return (
        <div className="warranty-div">
            <div className="free-delivery-div">
                <BoxSeamFill className="warranty-icons" />
                <div className="blue">
                    <h5><strong>Free Delivery</strong></h5>
                    <h6>on order above $50,000 </h6>
                </div>
            </div>
            <div className="free-delivery-div">
                <Exclude className="warranty-icons" />
                <div className="blue">
                    <h5><strong>Best quality</strong></h5>
                    <h6>best quality in low price</h6>
                </div>
            </div>
            <div className="free-delivery-div">
                <KeyFill className="warranty-icons" />
                <div className="blue">
                    <h5><strong>1 year warranty</strong></h5>
                    <h6>Available warranty</h6>
                </div>
            </div>
        </div>
    )
}
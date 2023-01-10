import { CartFill, Star, StarFill, StarHalf } from "react-bootstrap-icons"

export default function Speaker() {

    return (
        <div className="speaker-div">
            <div className="speaker-first-div">
                <img src="speaker.png" className="speaker-img" alt="speaker" />
                <div className="speaker-big-div">
                    <h5 className="blue">JBL bar 2.1 deep bass</h5>
                    <h6>$11.70</h6>
                    <div>
                        <StarFill /> <StarFill /> <StarFill /> <StarHalf /> <Star />
                    </div>
                    <div className="add-to-cart-btn">
                        Add to cart
                        <span className="popular-cart">
                            <CartFill />
                        </span>
                    </div>
                </div>
            </div>
            <div className="speaker-second-div">
                <div className="speaker-small-div" >
                    <img src="controller.png" className="controller-class" alt="controller"/>
                    <div>
                        <h5 className="blue">Play game</h5>
                        <h6>$11.70</h6>
                        <StarFill /> <StarFill /> <StarFill /> <StarHalf /> <Star />

                    </div>
                </div>
                <div className="speaker-small-div">
                    <img src="laptop.png" className="controller-class" alt="laptop" />
                    <div>
                        <h5 className="blue">Play game</h5>
                        <h6>$11.70</h6>
                        <StarFill /> <StarFill /> <StarFill /> <StarHalf /> <Star />
                    </div>
                </div>
            </div>
        </div>
    )
}
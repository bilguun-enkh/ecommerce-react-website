import { CartFill, Star, StarFill, StarHalf } from "react-bootstrap-icons"
import ReactStars from "react-rating-stars-component"

export default function Speaker() {

    return (
        <div className="speaker-div">
            <div className="speaker-first-div">
                <img src="speaker.png" className="speaker-img" alt="speaker" />
                <div className="speaker-big-div">
                    <h5 className="blue m-0">JBL bar 2.1 deep bass</h5>
                    <h6 className="m-0">$11.70</h6>
                    <div>
                    <ReactStars
                        size={30}
                        isHalf={true} />
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
                        <ReactStars
                        size={20}
                        isHalf={true} />

                    </div>
                </div>
                <div className="speaker-small-div">
                    <img src="laptop.png" className="controller-class" alt="laptop" />
                    <div>
                        <h5 className="blue">Play game</h5>
                        <h6>$11.70</h6>
                        <ReactStars
                        size={20}
                        isHalf={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}
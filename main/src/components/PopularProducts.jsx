import products1 from "../data/popular"
import threeCarousel from '../data/threecarousel';
import AliceCarousel from "react-alice-carousel";
import { Cart2, Heart } from "react-bootstrap-icons";
import ReactStars from "react-rating-stars-component";

const handleDragStart = (e) => e.preventDefault();

function PopularProduct({ AddToCartBtn }) {
    const productsData = products1.map(data => {
        return (
            <button className="popular-btn"><strong>{data.title}</strong></button>
        )
    })


    return (
        <div>
            <div className="popular-products-div">
                <h3>Popular Products</h3>
                <div className="popular-btn-div">
                    {productsData}
                </div>
            </div>
            <div>
                <AliceCarousel mouseTracking items={threeCarousel.map(data => {
                    function AddToWishlist(id) {
                        console.log(id)
                    }
                    return (
                        <div>
                            <div className='popular-slider-border'>
                                <img src={data.url} onDragStart={handleDragStart} alt="pic" />
                                <button onClick={() => AddToWishlist(data.id)} className="add-to-wishlist-btn"><Heart /></button>
                                <div className='popular-slider-inner'>
                                    <div>
                                        <h5 className="popular-h5">{data.captionHeader} </h5>
                                        <h6>{data.price}</h6>
                                    </div>
                                    <span className="popular-cart" onClick={AddToCartBtn}>
                                        <Cart2 />
                                    </span>
                                </div>
                                <div className="react-stars">
                                    <ReactStars
                                        size={20}
                                        isHalf={true} />
                                </div>
                            </div>
                            <div className='popular-slider-border'>
                                <img src={data.url} onDragStart={handleDragStart} alt="pic" />
                                <button onClick={() => AddToWishlist(data.id)} className="add-to-wishlist-btn"><Heart /></button>
                                <div className='popular-slider-inner'>
                                    <div>
                                        <h5 className="popular-h5">{data.captionHeader} </h5>
                                        <h6>{data.price}</h6>
                                    </div>
                                    <span className="popular-cart" onClick={AddToCartBtn}>
                                        <Cart2 />
                                    </span>
                                </div>
                                <div className="react-stars">
                                    <ReactStars
                                        size={20}
                                        isHalf={true} />
                                </div>
                            </div>
                        </div>
                    )
                })} responsive={{ 0: { items: 4, } }} disableButtonsControls="none" />
            </div>
        </div>
    )
}
export default PopularProduct
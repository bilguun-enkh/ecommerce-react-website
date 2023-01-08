import products1 from "../data/popular"
import threeCarousel from '../data/threecarousel';
import AliceCarousel from "react-alice-carousel";


const handleDragStart = (e) => e.preventDefault();

const items = threeCarousel.map(data => {
    return (
        <div>
            <div className='popular-slider-border'>
                <img src={data.url} onDragStart={handleDragStart} alt="pic" role="presentation" />
                <div className='popular-slider-inner'>
                    <h4>{data.captionHeader} </h4>
                </div>
            </div>
            <div className='popular-slider-border'>
                <img src={data.url} onDragStart={handleDragStart} alt="pic" role="presentation" />
                <div className='popular-slider-inner'>
                    <h4>{data.captionHeader} </h4>
                </div>
            </div>
        </div>)
});

function PopularProduct() {
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
                <AliceCarousel mouseTracking items={items} responsive={{ 0: { items: 4, } }} />
            </div>
        </div>
    )
}
export default PopularProduct
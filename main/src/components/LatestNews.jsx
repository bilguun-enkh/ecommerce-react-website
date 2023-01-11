import AliceCarousel from "react-alice-carousel";
import latestnews from "../data/latestnews";

const items = latestnews.map(data => {
    return (
        <div className="latest-news-slider blue">
            <img src={data.url} alt="" />
            <div className="latest-news-text">
                <h3>{data.header}</h3>
                <h6>{data.synopsis}</h6>
                <h6>{data.author}</h6>
            </div>
        </div>
    )
})

export default function LatestNews() {
    return (
        <div className="latest-div">
            <div className="d-flex justify-content-between blue">
                <h3 className="blue"><strong>Latest New</strong></h3>
                <h5>View all</h5>
            </div>
            <div>
                <AliceCarousel mouseTracking items={items} disableButtonsControls={"true"} responsive={{ 0: { items: 2, } }} />
            </div>
        </div>
    )
}
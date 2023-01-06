import Carousel from 'react-bootstrap/Carousel';
import carouselData from '../data/carouselpic';

function CarouselFunc() {

    const img = carouselData.map(data => {
        return (
            <Carousel.Item>
                <img
                    className={data.class}
                    src={data.url}
                    alt={data.alt}
                />
                <Carousel.Caption>
                    <strong><h3 className='carousel-header'>{data.captionHeader}</h3></strong>
                    <p className='carousel-paragraph'>
                        {data.captionP}</p>
                </Carousel.Caption>
            </Carousel.Item >
        )
    })
    return (
        <div className="carousel-div">
            <Carousel variant="dark" className='carousel-second-div'>
                {img}

            </Carousel>
            <button className='carousel-shop-btn'><strong>Shop now</strong></button>
            <button className='carousel-view-btn'><strong>View more</strong></button>
        </div>
    );
}

export default CarouselFunc;
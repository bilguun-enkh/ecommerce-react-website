import Carousel from 'react-bootstrap/Carousel';

function CarouselFunc() {
    return (
        <div className="carousel-div">
            <Carousel variant="dark" className='carousel-second-div'>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://cdn-7.nikon-cdn.com/Images/CPCAssets/dslr-rethink/img/overview/overview-sensor-comparison.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Nikon Camera</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://www.apple.com/v/macbook-pro-14-and-16/c/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>MacBook Pro</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="http://9to5mac.com/wp-content/uploads/sites/6/2013/08/bose-soundlink-mini-best-price-review.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>SoundLink Mini II</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselFunc;
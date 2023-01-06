import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carouselData from '../data/carouselpic';


const handleDragStart = (e) => e.preventDefault();

const items = carouselData.map(data => {
    return (
        <div className='slider-border'>
            <img src={data.url} onDragStart={handleDragStart} role="presentation" className="test" />
        </div>)
});

export function ThreeCarousel() {
    return (
        <div>
            <AliceCarousel mouseTracking items={items} responsive={{0: {items: 3,}}} />
        </div>
    )
}
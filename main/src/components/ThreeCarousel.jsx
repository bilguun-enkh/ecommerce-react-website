import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import threeCarousel from '../data/threecarousel';


const handleDragStart = (e) => e.preventDefault();

const items = threeCarousel.map(data => {
    return (
        <div className='slider-border'>
            <img src={data.url} onDragStart={handleDragStart} role="presentation" />
            <div className='slider-inner'>
                <h4>{data.captionHeader} </h4>
                <h6>({data.items})</h6>
            </div>
        </div>)
});

export function ThreeCarousel() {
    return (
        <div>
            <AliceCarousel mouseTracking items={items} responsive={{ 0: { items: 3, } }} />
        </div>
    )
}
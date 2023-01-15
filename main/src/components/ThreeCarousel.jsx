import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import threeCarousel from '../data/threecarousel';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Example from './Modal';

const handleDragStart = (e) => e.preventDefault();

const items = threeCarousel.map(data => {
    function handleUpVote(props) {
        console.log(props.captionHeader)
    }

    return (
        <div className='slider-border'>
            <img src={data.url} onDragStart={handleDragStart} role="presentation" />
            <Example />
            <div className='slider-inner'>
                <h4><a onClick={() => { handleUpVote(data) }} >{data.captionHeader} </a></h4>
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
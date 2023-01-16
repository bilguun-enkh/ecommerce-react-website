import '../App.css';
import NavBar from '../components/NavBar';
import MainMenu from '../components/MainMenu';
import CarouselFunc from '../components/Carousel';
import { BrowseCategories } from '../components/BrowseCategories';
import { ThreeCarousel } from '../components/ThreeCarousel';
import PopularProduct from '../components/PopularProducts';
import SaleComp from '../components/SaleComp';
import Speaker from '../components/Speaker';
import Warranty from '../components/Warranty';
import EmployeesCard from '../components/EmployeesCard';
import SpacingTechLogo from '../components/SpacingTechLogo';
import LatestNews from '../components/LatestNews';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
    let [count, setCounter] = useState(0)
    function AddToCartBtn() {
        setCounter(count + 1)
        console.log(1)
    }
    return (
        <div>
            <div className="my-container">
                <NavBar />
            </div>

            <div className="searchContainer">
                <SearchBar count={count} />
            </div>

            <div className='browser-container'>
                <div className='browse-div'>
                    <BrowseCategories />
                    <MainMenu />
                </div>
            </div>

            <div className='my-container'>
                <CarouselFunc />
            </div>

            <div className='three-container'>
                <ThreeCarousel />
            </div>

            <div className='my-container'>
                <PopularProduct AddToCartBtn={AddToCartBtn} />
            </div>

            <div className="sale-container my-container">
                <SaleComp />
            </div>

            <div className='my-container'>
                <Speaker />
            </div>

            <div className='my-container'>
                <Warranty />
            </div>

            <div className='my-container'>
                <EmployeesCard />
            </div>

            <div className='my-container'>
                <SpacingTechLogo />
            </div>

            <div className='my-container'>
                <LatestNews />
            </div>

            <div className='footer-background'>
                <Footer />
            </div>
        </div>
    )
}
import "../App.css"
import NavBar from "../components/NavBar"
import MainMenu from "../components/MainMenu"
import CarouselFunc from "../components/Carousel"
import { BrowseCategories } from "../components/BrowseCategories"
import { ThreeCarousel } from "../components/ThreeCarousel"
import PopularProduct from "../components/PopularProducts"
import SaleComp from "../components/SaleComp"
import Speaker from "../components/Speaker"
import Warranty from "../components/Warranty"
import EmployeesCard from "../components/EmployeesCard"
import SpacingTechLogo from "../components/SpacingTechLogo"
import LatestNews from "../components/LatestNews"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import { useState } from "react"
import LogIn from '../components/LogIn';
import Register from '../components/SignUp';
import { Route, Routes } from "react-router-dom"

export default function Home() {
    const [wishlist, setWishlist] = useState([])
    const [count, setCounter] = useState(0)
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
                <SearchBar
                    count={count}
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                />
            </div>

            <div className="browser-container">
                <div className="browse-div">
                    <BrowseCategories />
                    <MainMenu />
                </div>
            </div>

            <div className="my-container">
                <CarouselFunc />
            </div>

            <div className="three-container">
                <ThreeCarousel />
            </div>

            <div className="my-container">
                <PopularProduct
                    AddToCartBtn={AddToCartBtn}
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                />
            </div>

            <div className="sale-container my-container">
                <SaleComp />
            </div>

            <div className="my-container">
                <Speaker AddToCartBtn={AddToCartBtn} />
            </div>

            <div className="my-container">
                <Warranty />
            </div>

            <div className="my-container">
                <EmployeesCard />
            </div>

            <div className="my-container">
                <SpacingTechLogo />
            </div>

            <div className="my-container">
                <LatestNews />
            </div>

            <div className="footer-background">
                <Footer />
            </div>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<LogIn />} />
            </Routes>
        </div>
    )
}

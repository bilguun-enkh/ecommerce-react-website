import './App.css';
import { Truck, GeoAlt, Heart, Person, CartFill } from 'react-bootstrap-icons';
import { Button} from 'react-bootstrap'
import MainMenu from './components/MainMenu';
import CarouselFunc from './components/Carousel';
import { BrowseCategories } from './components/BrowseCategories';
import { ThreeCarousel } from './components/ThreeCarousel';
// import { PopularProducts } from './components/PopularProducts';


function App() {
  return (
    <div>
      <div className="my-container">

        <div className="my-nav-bar">
          <div>Need help? Call us: (+98) 0234 456 789</div>
          <div>
            <div className="nav-bar-2nd-div">
              <span className="our-store"><GeoAlt />Our store</span>
              <span className="track-order"><Truck />Track your order</span>
            </div>
          </div>
        </div>
      </div>

      <div className="searchContainer">
        <div className="searchDiv">
          <div className="logoDiv">
            <img src="electronLogo.png" alt="electronlogo" className="searchDivLogo"></img>
            <div className='searchBox'>
              <input placeholder='Search any things' className="searchInput"></input>
              <Button className="search-btn">Search</Button>
            </div>
          </div>
          <div className='register'>
            <span className='sign-in'><Person />Sign In</span>
            <span><Heart /></span>
            <span><CartFill /></span>
          </div>
        </div>
      </div>

      <div className='browser-container'>
        <div className='browse-div'>
          <BrowseCategories />
          <MainMenu />
          <div className='browse-free-return'>
            <p>30 Days Free Return</p>
          </div>
        </div>
      </div>

      <div className='my-container'>
        <CarouselFunc />
      </div>

      <div className='three-container'>
          <ThreeCarousel />
      </div>

      <div className='my-container'>
        {/* <PopularProducts />s */}
      </div>
    </div>


  );
}

export default App;

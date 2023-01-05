import { Truck, GeoAlt, Heart, Person, CartFill } from 'react-bootstrap-icons';
import { Button, Dropdown, Navbar } from 'react-bootstrap'
import './App.css';
import MainMenu from './components/MainMenu';


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
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className='my-btn'>
              Browse categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <MainMenu />
          <div className='browse-free-return'>
            <p>30 Days Free Return</p>
          </div>
        </div>
      </div>
      <div className='my-container'>
        <div className='carousel-div'></div>
      </div>
    </div>


  );
}

export default App;

import './App.css';
import { Truck, GeoAlt, Heart, Person, CartFill } from 'react-bootstrap-icons';

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
              <button className="search-btn">Search</button>
            </div>
          </div>
          <div className='register'>
            <span className='sign-in'><Person />Sign In</span>
            <span><Heart /></span>
            <span><CartFill /></span>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='browse-div'>
          <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Action
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;

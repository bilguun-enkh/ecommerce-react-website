import './App.css';
import { Truck, GeoAlt, Heart, Person, CartFill } from 'react-bootstrap-icons';

function App() {
  return (
    <div>
      <div className="container">

        <div className="nav-bar">
          <div>Need help? Call us: (+98) 0234 456 789</div>
          <div>
            <div className="nav-bar-2nd-div">
              <span><GeoAlt />Our store</span>
              <span><Truck />Track your order</span>
            </div>
          </div>
        </div>
      </div>

      <div className="searchContainer">
        <div class="searchDiv">
          <div class="logoDiv">
            <img src="electronLogo.png" class="searchDivLogo"></img>
            <div className='searchBox'>
              <input></input>
            </div>
          </div>
          <div className='register'>
            <span><Person />Sign In</span>
            <span><Heart /></span>
            <span><CartFill /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

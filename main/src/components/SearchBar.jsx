import { Heart, Person, Cart } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap'
import WishlistDiv from './WishlistDiv';
import ToggleVisibility from './ToggleWishlist';
function SearchBar({ count, wishlist }) {
    console.log(count)

    return (
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
                <ToggleVisibility>
                    <WishlistDiv />
                </ToggleVisibility>
                    {wishlist}
                <span className='cart-count'><Cart />{count}</span>
            </div>
        </div>
    )
}
export default SearchBar
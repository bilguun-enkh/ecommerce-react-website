import { Heart, Person, CartFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap'
function SearchBar() {
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
                <span><Heart /></span>
                <span><CartFill /></span>
            </div>
        </div>
    )
}
export default SearchBar
import { Heart, Person, Cart } from "react-bootstrap-icons"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Dropdown } from 'react-bootstrap'
function SearchBar({ count, wishlist, setWishlist }) {
    return (
        <div className="searchDiv">
            <div className="logoDiv">
                <Link to={"/"}>
                    <img
                        src="electronLogo.png"
                        alt="electronlogo"
                        className="searchDivLogo"
                    ></img>
                </Link>
                <div className="searchBox">
                    <input
                        placeholder="Search any things"
                        className="searchInput"
                    ></input>
                    <Button className="search-btn">Search</Button>
                </div>
            </div>
            <div className="register">
                <span className="sign-in">
                    <Link className="sign-in-link" to={"/login"}>
                        <Person /> Sign In
                    </Link>
                </span>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="wishlist-btn">
                        <Heart className="mx-2" />
                        {wishlist.length}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">{wishlist.map((w, index) => {
                            return (
                                <div>
                                    <div>
                                        {w.captionHeader}
                                        {w.price}
                                    </div>
                                    <button
                                        onClick={() => {
                                            setWishlist(
                                                wishlist.filter(
                                                    (wish) => wish.id !== w.id
                                                )
                                            )
                                        }}
                                    >
                                        X
                                    </button>
                                </div>
                            )
                        })}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <span className="cart-count">
                    <Cart />
                    {count}
                </span>
            </div>
        </div>
    )
}
export default SearchBar

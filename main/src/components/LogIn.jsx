import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import SearchBar from "./SearchBar"
import NavBar from "./NavBar"
import { BrowseCategories } from "./BrowseCategories"
import MainMenu from "./MainMenu"
import Footer from "./Footer"
import { Link } from "react-router-dom"

export default function LogIn() {
    return (
        <div>
            <div className="my-container">
                <NavBar />
            </div>

            <div className="searchContainer">{/* <SearchBar /> */}</div>

            <div className="browser-container">
                <div className="browse-div">
                    <BrowseCategories />
                    <MainMenu />
                </div>
            </div>
            <div className="form-container">
                <h2 className="my-5">Log in</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password*</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                        />
                    </Form.Group>
                    <div className="d-grid gap-2 mt-5">
                        <Button className="register-btn" size="lg">
                            Log in
                        </Button>
                    </div>

                    <Form.Group
                        className="mb-3 m-4 text-center"
                        controlId="formBasicCheckbox"
                    >
                        <Form.Text className="text-muted">
                            Don't have an account?
                            <Link to={"/register"}> Sign up</Link>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
            <div className="footer-background mt-5">
                <Footer />
            </div>
        </div>
    )
}

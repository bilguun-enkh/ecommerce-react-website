import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import SearchBar from "./SearchBar"
import NavBar from "./NavBar"
import { BrowseCategories } from "./BrowseCategories"
import MainMenu from "./MainMenu"
import Footer from "./Footer"
import { Link } from "react-router-dom"

export default function Register() {
    function handleSubmit() {
        console.log(1)
    }
    return (
        <div>
            <div className="my-container">
                <NavBar />
            </div>

            <div className="searchContainer">
                <SearchBar />
            </div>

            <div className="browser-container">
                <div className="browse-div">
                    <BrowseCategories />
                    <MainMenu />
                </div>
            </div>
            <div className="form-container">
                <h2 className="my-5">Sign up</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control type="email" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password*</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Create a password"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Text className="text-muted">
                            Must be at least 8 characters.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Confirm password*</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm password"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Text className="text-muted">
                            Must be at least 8 characters.
                        </Form.Text>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button className="register-btn" size="lg">
                            Create account
                        </Button>
                    </div>

                    <Form.Group
                        className="mb-3 m-4 text-center"
                        controlId="formBasicCheckbox"
                    >
                        <Form.Text className="text-muted">
                            Already have an account?
                            <Link to={"/login"}> Login in</Link>
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
